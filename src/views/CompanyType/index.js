import {useState, useEffect, memo, Fragment} from 'react'
//apexcharts
import {
    Button,
    Card,
    Col,
    Form,
    Popconfirm,
    Popover,
    Input,
    message,
    Row,
    Tag
} from 'antd';
//flatpickr
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    EditOutlined,
    SaveTwoTone,
    CloseOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import {
    EditableProTable
} from '@ant-design/pro-components';
import companyTypeServices from "../../services/companyTypeServices";
import SubHeader from "../../components/partials/dashboard/headerstyle/sub-header";

// Import selectors & action from setting store

const waitTime = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};


const CompanyType = memo((props) => {
        const [editableKeys, setEditableRowKeys] = useState([]);

        // Load
        // const [loading, setLoading] = useState(false);
        const [defaultList, setdefaultList] = useState([]);
        const [searchForm] = Form.useForm();
        const [list, setList] = useState([]);
        const [pagination, setPagination] = useState({
            total: 20,
            current: 1,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
        });

        useEffect(() => {
            getList();
        }, []);

        const getList = async () => {
            try {
                // setLoading(true);
                const response = await companyTypeServices.getAllItems();
                setList(response.data);
                setdefaultList(response.data);
                setPagination({
                    ...pagination,
                    total: response.totalItems,
                })
                return response
            } catch (e) {
                console.log(e);
            }
        }


        const columns = [
            {
                title: 'STT',
                fixed: 'left',
                dataIndex: 'index',
                width: 50,
                readonly: true,
                render: (_, record, index) => <>{(pagination.current - 1) * pagination.pageSize + index + 1}</>,
            },
            {
                title: 'Mã loại hình',
                dataIndex: 'companyTypeCode',
            },
            {
                title: 'Tên loại hình khách hàng',
                dataIndex: 'companyTypeName',
            },
            {
                title: 'Ghi chú',
                dataIndex: 'notice',
            },
            {
                title: 'Trạng thái',
                key: 'status',
                dataIndex: 'status',
                valueType: 'switch',
                render: (text, record, index, action) => {
                    if (record.status) {
                        return <Tag icon={<CheckCircleOutlined/>} color="success">
                            Hoạt động
                        </Tag>
                    } else {
                        return <Tag icon={<CloseCircleOutlined/>} color="error">
                            Không hoạt động
                        </Tag>
                    }
                }
            },
            {
                title: 'Thao tác',
                valueType: 'option',
                fixed: 'right',
                width: 60,
                render: (text, record, _, action) => [
                    <Popover content="Chỉnh sửa">
                    <Button type="link"
                            size={'small'}
                            key="editable"
                            onClick={() => {
                                // @ts-ignore
                                action?.startEditable?.(record.id);
                            }}
                    >
                        <EditOutlined/>
                    </Button>
                        </Popover>,
                    <Popover content="Xóa">
                    <Popconfirm
                        description="Bạn có chắc chắn muốn xóa không?"
                        okText="Đồng ý"
                        cancelText="Hủy"
                        onConfirm={async () => {
                            setList(list.filter((item) => item.id !== record.id));
                            // @ts-ignore
                            await companyTypeServices.deleteItem(record.id)
                            message.success('Thành công');
                        }}
                    >
                        <Button
                            type="link"
                            danger
                            key="delete"
                            size="small"
                        >
                            <DeleteOutlined/>
                        </Button>
                    </Popconfirm>
                        </Popover>,
                ],
            },
        ];

        const searchSubmit = async () => {
            const value = await searchForm.validateFields();
            const data = defaultList.filter(item => {
                return (item.companyTypeCode?.toLowerCase().includes(value.Code?.toLowerCase() || '')
                    && item.companyTypeName?.toLowerCase().includes(value.Name?.toLowerCase() || ''))
            })
            setList(data);
        }

        const searchReset = async () => {
            setList(defaultList);
            searchForm.resetFields();
        }

        return (
            <Fragment>
                {/*<Card bordered={false} style={{marginBottom: '15px'}} bodyStyle={{paddingBottom: '0'}}>*/}
                    <SubHeader/>
                    <Form name='search' form={searchForm}>
                        <Row gutter={16} justify='end'>
                            <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                                <Form.Item label='Mã loại hình：' name='Code'>
                                    <Input placeholder='Mã loại hình' allowClear/>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                                <Form.Item label='Tên loại hình：' name='Name'>
                                    <Input placeholder='Tên loại hình' allowClear/>
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                                <div className='text-align-right' style={{paddingBottom: '24px'}}>
                                    <Button type='primary' htmlType='submit' onClick={searchSubmit}>
                                        Tìm kiếm
                                    </Button>
                                    <Button htmlType='button' style={{marginLeft: 8}} onClick={searchReset}>
                                        Làm lại
                                    </Button>

                                </div>
                            </Col>
                        </Row>
                    </Form>
                {/*</Card>*/}
                <Card bordered={false} style={{marginBottom: '15px'}} bodyStyle={{paddingBottom: '0'}}>

                    <EditableProTable
                        rowKey='id'
                        scroll={{x: 'max-content'}}
                        recordCreatorProps={
                            {
                                position: 'bottom',
                                record: () => ({id: (Math.random() * 1000000).toFixed(0)}),
                            }

                        }
                        loading={false}
                        columns={columns}
                        request={async () => ({
                            data: list,
                            success: true,
                        })}
                        pagination={{
                            showQuickJumper: true,
                            showSizeChanger: true,
                            pageSize: pagination.pageSize,
                            current: pagination.current,
                            total: pagination.total,
                            onChange: (page, pageSize) => {
                                console.log()
                                // getList();
                                setPagination({
                                    ...pagination,
                                    current: page,
                                    pageSize: pageSize || 10,
                                })
                            },
                        }}
                        value={list}
                        onChange={setList}
                        editable={{
                            type: 'multiple',
                            saveText: <Popover content="Lưu">
                                <Button type="link"
                                        size={'small'}
                                >
                                    <SaveTwoTone twoToneColor="#52c41a"/>
                                </Button>
                            </Popover>,
                            cancelText: <Popover content="Hủy">
                                <Button type="link"
                                        size={'small'}
                                >
                                    <CloseOutlined/>
                                </Button>
                            </Popover>,
                            deleteText: <Popover content="Xóa">
                                <Button type="link" danger
                                        size={'small'}
                                >
                                    <DeleteOutlined/>
                                </Button>
                            </Popover>,
                            deletePopconfirmMessage: 'Bạn có chắc chắn muốn xóa không?',
                            onlyOneLineEditorAlertMessage: 'Chỉ có thể chỉnh sửa một dòng',
                            onlyAddOneLineAlertMessage: 'Chỉ có thể thêm một dòng',
                            editableKeys,
                            onSave: async (rowKey, data, row) => {
                                data.createdBy = '';
                                data.updatedBy = '';
                                if (list.filter(item => item.id === rowKey).length > 0) {
                                    await companyTypeServices.updateItem(rowKey.toString() || '', data);
                                } else {
                                    await companyTypeServices.createItem(data);
                                    // await postCompanyType(data);
                                }
                                await getList();
                                message.success('Thành công');
                                await waitTime(200);
                            },
                            onDelete: async (rowKeys) => {
                                // deleteCompanyType(rowKeys);
                                await companyTypeServices.deleteItem(rowKeys);
                                message.success('Thành công');
                            },
                            onChange: setEditableRowKeys,
                        }}
                    />
                </Card>

            </Fragment>
        )
    }
)

CompanyType.displayName = "CompanyType"
export default CompanyType
