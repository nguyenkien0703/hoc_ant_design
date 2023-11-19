import {Button, Col, DatePicker, Input, Row, Space} from "antd";
import {useState} from "react";
import {Checkbox} from 'antd'

const {RangePicker} = DatePicker;

function BookRoom() {
    const [data, setData] = useState({});
    const handleChangeInput = (e) => {
        const object = {
            ...data, [e.target.name]: e.target.value
        }
        setData(object);
    }

    const handleSubmit = () => {
        console.log('data', data)
    }
    const handleChangeCheckbox = (e) => {
        const object = {
            ...data, services: e
        }
        setData(object);
    }
    const handleChangeDate = (dates, dateStrings) => {
        const object = {
            ...data,
            date: dateStrings
        }
        setData(object);
    }


    return (<>
        <h2>dat phong</h2>
        <Row gutter={[20, 20]}>
            <Col span={24}>
                <p>ho ten</p>
                <Input name='fullname' placeholder='enter your name' onChange={handleChangeInput}/>
            </Col>
            <Col span={12}>
                <p>sdt</p>
                <Input name='phone' placeholder='enter your phone' onChange={handleChangeInput}/>
            </Col>
            <Col span={12}>
                <p>email</p>
                <Input name='email' placeholder='enter your email' onChange={handleChangeInput}/>
            </Col>
            <Col span={12}>
                <p>dich vu them</p>
                <Checkbox.Group onChange={handleChangeCheckbox}>
                    <Space direction="vertical">
                        <Checkbox value="thue xe may">thue xe may</Checkbox>
                        <Checkbox value="thue xe o to 4 cho">thue xe o to 4 cho</Checkbox>
                        <Checkbox value="thue xe o to 6 cho">thue xe o to 6 cho</Checkbox>
                    </Space>
                </Checkbox.Group>

            </Col>

            <Col span={12}>
                <p>chọn ngày</p>
                <RangePicker placeholder={['nhan phong','tra phong']}  format="DD-MM-YYYY"  onChange={handleChangeDate}/>


            </Col>


            <Col span={24}>
                <Button type='primary' onClick={handleSubmit}>submit</Button>
            </Col>
        </Row>

    </>)
}

export default BookRoom;