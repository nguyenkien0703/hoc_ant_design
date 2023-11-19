import {Button, Checkbox, Col, DatePicker, Input, Radio, Row, Select, Space} from "antd";
import {useState} from "react";

const {RangePicker} = DatePicker;

function BookRoom() {
    const [data, setData] = useState({
        time: "14 gio",
    });

    const optionsTimes = [];
    for (let i = 7; i <= 24; i++) {
        optionsTimes.push({
            value: i > 9 ? `${i} gio` : `0${i} gio`, label: i > 9 ? `${i} gio` : `0${i} gio`,
        })
    }


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
            ...data, date: dateStrings
        }
        setData(object);
    }
    const handleChangeSelect = (e) => {
        const object = {
            ...data, time: e
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
                <p>quà tặng</p>
                <Radio.Group name="gift">
                    <Space direction="vertical" onChange={handleChangeInput}>
                        <Radio value="ao coc">ao coc</Radio>
                        <Radio value="mu">mu</Radio>
                        <Radio value="kem chong nang">kem chong nang</Radio>
                    </Space>
                </Radio.Group>

            </Col>

            <Col span={12}>
                <p>chọn ngày</p>
                <RangePicker placeholder={['nhan phong', 'tra phong']} format="DD-MM-YYYY" onChange={handleChangeDate}/>


            </Col>

            <Col span={12}>
                <p>giờ nhận phòng</p>
                <Select style={{width: "100%"}} defaultValue={data.time} onChange={handleChangeSelect}
                        options={optionsTimes}/>

            </Col>

            <Col span={24}>
                <Button type='primary' onClick={handleSubmit}>submit</Button>
            </Col>
        </Row>

    </>)
}

export default BookRoom;