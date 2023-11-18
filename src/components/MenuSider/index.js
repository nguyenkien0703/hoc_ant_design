import {Menu} from "antd";
import {UpOutlined,FastBackwardOutlined,ArrowsAltOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
function MenuSider(){
    const items =[
        {
            label: "menu1"  ,
            icon: <UpOutlined />,
            key: "menu-1",
        //     tao menu con trong menu chinh dung key la children
            children: [
                {
                    label: <Link to='/'>dashboard</Link>,
                    key: '/',
                },
                {
                    label: "menu 1-2",
                    key: "menu-1-2",
                },
                {
                    label: "menu 1-3",
                    key: "menu-1-3",
                },
            ]

        },
        {
            label: "menu2",
            key: "menu-2",
            icon: <FastBackwardOutlined />,
            children: [
                {
                    label: "menu 1-1",
                    key: "menu-2-1",
                },
                {
                    label: "menu 1-2",
                    key: "menu-2-2",
                },
                {
                    label: "menu 1-3",
                    key: "menu-2-3",
                },
            ]
        },
        {
            label: "menu3",
            key: "menu-3",
            icon: <ArrowsAltOutlined />
        },
        {
            label: <Link to='/book-room'>book-room</Link>,
            key: "book-room",
            icon: <ArrowsAltOutlined />
        },
    ];



    return(
        <>
            <Menu
                mode="inline"
                items={items} defaultSelectedKeys={['/']} defaultOpenKeys={['menu-1']}
            />

        </>

    )
}
export default MenuSider;