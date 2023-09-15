import React from "react"
import { Form, Link, useNavigation, useOutletContext } from "react-router-dom"
import InputContainer from "../../components/InputContainer"

import { toast } from "react-toastify"
import customFetch from "../../utils/customFetch"
import { bytesToMegabytes } from "../../utils/misc"



export const action = async ({ request }) => {
  const formData = await request.formData();

  const file = formData.get('avatar');
  if (file && file.size > 500000) {
    toast.error('Image size too large');
    return null;
  }

  try {
    await customFetch.patch('/users/update-user', formData);
    toast.success('Profile updated successfully');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const Profile = () => {
  const [profileImage, setProfileImage] = React.useState(null)
  const [profileImageSize, setProfileImageSize] = React.useState(0)
  const [profileImageTooBig, setProfileImageTooBig] = React.useState(false)

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfileImage(URL.createObjectURL(event.target.files[0]));
    }

    
    setProfileImageSize(bytesToMegabytes(event.target.files[0].size))
    console.log(bytesToMegabytes(event.target.files[0].size))
    let maxSizeForImagesInBytes = 500000
    setProfileImageTooBig(event.target.files[0].size > maxSizeForImagesInBytes ? true : false)
  }





  const { user } = useOutletContext()
  const { name, email } = user

  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"

  return (
    <section className="flex flex-col">
      <Form method="post" className="bg-white px-4 py-6 w-[90vw] max-w-sm drop-shadow-sm" encType='multipart/form-data'>
        {/* profile image container */}
        <div>
          <h2 className="text-lg">Profile Image</h2>
          <p className=" text-xs mb-2">Current file size: <span className={profileImageTooBig ? `text-red-500` : undefined}>{profileImageSize}MB </span>(Max 0.50MB)</p>
          <div className="border flex items-center p-2">
          <input type="file" id="avatar" name="avatar" className=" p-1 mr-2" accept="image/*" onChange={onImageChange}/>
          </div>
          {/* actual image that user selects here */}
          {profileImage ? ( 
            <img src={profileImage} alt="image name here" className="border border-t-0"/>
            ) : (
            <p className="my-2">No image chosen</p>
            )}
        </div>
        
        <InputContainer type="text" name="name" labelText="name" defaultValue={user?.name}/>
        <InputContainer type="email" name="email" labelText="email" defaultValue={user?.email} />

 

        <button type="submit" className="btn-main w-full" disabled={isSubmitting}>{isSubmitting ? "Updating Profile..." : "Update Profile"}</button>
      </Form>
    </section>
  )
}

export default Profile