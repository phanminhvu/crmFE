import {memo,lazy,Suspense} from 'react'
import {Switch,Route} from 'react-router-dom'
import { ConfigProvider } from 'antd';

import  vi_VN from 'antd/lib/locale/vi_VN';
//TransitionGroup
import {TransitionGroup,CSSTransition} from "react-transition-group";

// Dashboard
const Index = lazy(() => import('../views/index'))
const CompanyType = lazy(() => import('../views/CompanyType/index'))
const CompanyGroup = lazy(() => import('../views/CompanyGroup/index'))

const DefaultRouter = memo(() => {
    return (
        <TransitionGroup>
            <CSSTransition classNames="fadein" timeout={300}>
                <ConfigProvider locale={vi_VN}>
                <Suspense fallback={<div className="react-load"></div>}>
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/company-type" exact component={CompanyType} />
                        <Route path="/company-group" exact component={CompanyGroup} />
                    </Switch>
                </Suspense>
                </ConfigProvider>
            </CSSTransition>
        </TransitionGroup>
    )
}
)

DefaultRouter.displayName="DefaultRouter"
export default DefaultRouter
