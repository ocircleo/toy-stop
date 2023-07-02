import { useLoaderData } from "react-router-dom";
import useTitle from "../../shared/Title/useTitle";
import Swal from 'sweetalert2'
const UpdateToys = () => {
    useTitle('Update Toys')
    const toyData = useLoaderData()
    let dtoyName = toyData.toyName
    let dpicture = toyData.picture
    let dsellerName = toyData.sellerName
    let dsellerEmail = toyData.sellerEmail
    let drating = toyData.rating
    let davailableQuantity = toyData.availableQuantity
    let ddetaill = toyData.detaill
    let dcatagory = toyData.catagory
    let dprice = toyData.price
    let picture, toyName, sellerName, sellerEmail, price, rating, availableQuantity, detaill, catagory
    const upDateDb = (e) => {
        e.preventDefault()
        picture = document.getElementById('picture').value || '',
            toyName = document.getElementById('toyname').value,
            sellerName = document.getElementById('seller-name').value || 'unknown',
            sellerEmail = document.getElementById('seller-email').value || 'unknown',
            price = document.getElementById('price').value,
            rating = document.getElementById('rating').value || 'no ratings',
            availableQuantity = document.getElementById('available-quantity').value || 'unavailable',
            detaill = document.getElementById('detaill').value || 'unavailable',
            catagory = document.getElementById('catagory').value
        price = parseInt(price)
        let data = { picture, toyName, sellerName, sellerEmail, price, rating, availableQuantity, detaill, catagory }
        fetch(`https://assignment-11-server-sigma-green.vercel.app/toys/${toyData._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(resData => {
            if (resData.modifiedCount > 0) {
                Swal.fire(
                    'succes',
                    'Your item has been updated',
                    'success'
                )
            }
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.code || err.message,
            })
        })
    }
    return (
        <div className="container mx-auto md:px-0 px-4" onSubmit={upDateDb}>
            <form className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-4">
                <div className="flex flex-col gap-3">
                    <label htmlFor="toyname">enter toy name <span className="text-red-500">*</span></label>
                    <input type="text" name="name" id="toyname" defaultValue={dtoyName} required />
                </div>

                <div className="flex flex-col gap-3">
                    <label htmlFor="seller-name">enter seller name </label>
                    <input type="" name="name" id="seller-name" defaultValue={dsellerName} />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="seller-email">enter seller email </label>
                    <input type="email" name="email" id="seller-email" defaultValue={dsellerEmail} />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="price">enter price <span className="text-red-500">*</span></label>
                    <input type="number" name="price" id="price" required defaultValue={dprice} />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="rating">enter rating </label>
                    <input type="number" name="rating" id="rating" defaultValue={drating} />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="available-quantity">enter available-quantity </label>
                    <input type="number" name="available-quantity" id="available-quantity" defaultValue={davailableQuantity} />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="picture">enter picture url</label>
                    <input type="text" name="picture" id="picture" defaultValue={dpicture} />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="catagory">enter catagory <span className="text-red-500">*</span></label>
                    <select name="catagory" id="catagory" defaultValue={dcatagory} className="">
                        <option value="word-games">Word games</option>
                        <option value="lego">Lego</option>
                        <option value="robotic-set">Robotics Set</option>

                    </select>
                </div>
                <div className="flex flex-col gap-3  md:col-span-2  xl:col-span-3" >
                    <label htmlFor="detaill">enter detaill description </label>
                    <textarea type="text" name="detaill" defaultValue={ddetaill} id="detaill" className=" min-h-[100px] border-2 border-red-500 rounded" />
                </div>



                <button className='bg-yellow-500 py-2 rounded-md font-bold capitalize md:col-span-2 xl:col-span-3' > Update</button>



            </form>
        </div>
    );
};

export default UpdateToys;