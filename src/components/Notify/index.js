import {Button, Dropdown} from "antd";
import {BellOutlined} from '@ant-design/icons'
import "./Notify.css"

function Notify() {

    const items = [{
        label: <div className="notify__item">
            <div className="nofify__item-icon">
                <BellOutlined/>
            </div>

            <div className="notify__item-content">
                <div className="notify__item-title">
                    item 1
                </div>
                <div className="notify__item-time">
                    8p truoc
                </div>

            </div>


        </div>, key: '0'
    }, {
        label: "2nd menu item", key: '1'
    }, {
        label: "3nd menu item", key: '3'
    }, {
        label: "4nd menu item", key: '4'
    }, {
        label: "5nd menu item", key: '5'
    }, {
        label: "6nd menu item", key: '6'
    }, {
        label: "7nd menu item", key: '7'
    }, {
        label: "8nd menu item", key: '8'
    }

    ]
    return (<>
        {/*dropdownRender: custom dropdown, la 1 ham co san*/}
        <Dropdown menu={{items}} trigger={['click']} dropdownRender={(menu) => (<>
            <div className="notify__dropdown">
                <div className="notify__header">
                    <div className="notify__header-title">
                        <BellOutlined/> Notification
                    </div>
                    <Button type="link">view all</Button>
                </div>
                <div className="notify__body">
                    {menu}
                </div>
            </div>

        </>)}>
            <Button type="text" icon={<BellOutlined/>}></Button>
        </Dropdown>
    </>)
}

export default Notify;