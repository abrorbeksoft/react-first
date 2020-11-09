import s from './room.module.css'

export default function User() {

    return (
        <div >
            <div className="row">
                <div className="col-md-3 text-center ">
                    <img  className={  ` ${s.userImg}` } src="https://webmeup.com/upload/blog/lead-image-105.png" alt="" />
                </div>
                <div className="col-md-9">
                    <h5>Name: Ubaydullayev Abror</h5>
                    <div>Date of birth: 22.02.1998</div>
                    <div>City: Toshkent</div>
                    <div>Education: Tatu </div>
                    <div>Website: Just-site.uz</div>
                </div>
            </div>

            <div className="row my-3">
                <div className="col">
                    <h3 className="muted  ">My posts</h3>
                    <div>
                        <textarea className="form-control" name="text" id="" cols="30" rows="4">
                        </textarea>
                        <button className="btn my-2 btn-primary">Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}


