import s from "./messages.module.css"

export default function Messages(){
    return (
        <div className="row" >
            <div className={ `item my-2 row ${s.messageContainer}`}>
                <div className="col-md-1 text-center">
                    <img className="w-100" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>
                </div>
                <div className="col-md-11">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur provident commodi repudiandae alias natus quo officiis facilis dolore corporis? Adipisci asperiores vero mollitia consequatur ab iste ipsum eligendi voluptatum vel.
                </div>
            </div>
        </div>
    )
}