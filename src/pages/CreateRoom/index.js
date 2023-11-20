import {Button, Form, Input, InputNumber, Select, Switch} from "antd";

const {Option} = Select;

function CreateRoom() {
    const rules = [{
        required: true, message: 'bat buoc',
    },];

    const handleSubmit = (e) => {
        console.log(e)
    }


    return (<>
        <h2>them phong moi</h2>
        <Form layout="vertical" name='create-room' onFinish={handleSubmit}>
            <Form.Item
                label="ten phong"
                name="name"
                rules={[{required: true, message: 'bat buoc phai nhap!'}]}
            >

                <Input/>
            </Form.Item>
            <Form.Item
                label="so luong giuong"
                name="quantityBed"
                rules={rules}
            >
                <InputNumber min={1}/>
            </Form.Item>

            <Form.Item
                label="so ng toi da "
                name="quantityPeople"
                rules={rules}
            >
                <InputNumber min={1}/>
            </Form.Item>
            <Form.Item
                label="mo ta"
                name="desc"
            >
                {/*show ra textArea nhap van ban*/}
                <Input.TextArea showCount maxLength={100}/>
            </Form.Item>
            <Form.Item name="utils" noStyle label='tien ich'>
                {/*multiple la cho phep duoc select nhieu
                    allowClear la clear 1 phat het nhung thu da chon

                */}
                <Select mode="multiple" style={{width: "100%"}} allowClear>
                    <Option value="wifi">wifi</Option>
                    <Option value="nong lanh">nong lanh</Option>
                </Select>
            </Form.Item>
            <Form.Item valuePropName='checked' label='trang thai' name="status" >
                <Switch   />

            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType='submit'>
                    tao phong moi
                </Button>
            </Form.Item>

        </Form>
    </>)
}

export default CreateRoom;