import {Col, Row} from "antd";
import "./LearnGrid.css"
import CartItem from "../CartItem";
function LearnGrid() {
    return (
        <>
            {/*day la cua phan learn button*/}
            {/*<Row gutter={1000}>*/}
            {/*    <Col >*/}
            {/*        <div className="box">*/}
            {/*            cot 1*/}
            {/*        </div>*/}

            {/*    </Col>*/}
            {/*    <Col >*/}
            {/*        <div className="box">*/}
            {/*            cot 2*/}
            {/*        </div>*/}

            {/*    </Col>*/}
            {/*    <Col >*/}
            {/*        <div className="box">*/}
            {/*            cot 3*/}
            {/*        </div>*/}
            {/*    </Col>*/}
            {/*    <Col >*/}
            {/*        <div className="box">*/}
            {/*            cot 4*/}
            {/*        </div>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*day la cua phan learn button*/}

        {/*    day la cua bai dung layout*/}
            <Row gutter={[20,20]}>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItem title ="box 1"/>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItem title ="box 2"/>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItem title ="box 3"/>
                </Col>

                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItem title ="box 4"/>
                </Col>

            </Row>
            <Row gutter={[20,20]} className="mt-20">
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <CartItem title ="box 5" style={{height: "400px"}}/>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CartItem title ="box 6" style={{height: "400px"}}/>
                </Col>
            </Row>

            <Row gutter={[20,20]} className="mt-20">
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CartItem title ="box 7" style={{height: "400px"}}/>
                </Col>
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <CartItem title ="box 8" style={{height: "400px"}}/>
                </Col>

            </Row>

            <Row gutter={[20,20]} className="mt-20">
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CartItem title ="box 9" style={{height: "400px"}}/>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CartItem title ="box 10" style={{height: "400px"}}/>
                </Col>

                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CartItem title ="box 11" style={{height: "400px"}}/>
                </Col>
            </Row>

        {/*   end  day la cua bai dung layout*/}


        </>
    )
}

export default LearnGrid;