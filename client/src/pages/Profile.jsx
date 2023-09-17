import React from "react"
import { Form, useOutletContext } from "react-router-dom"
import InputContainer from "../../components/InputContainer"
import FileInputContainer from "../../components/FileInputContainer"
import SubmitBtn from "../../components/SubmitBtn"
import { toast } from "react-toastify"
import customFetch from "../../utils/customFetch"
import { MAX_IMAGE_SIZE_IN_BYTES } from "../../../utils/constants"



export const action = async ({ request }) => {
  const formData = await request.formData();

  const file = formData.get('avatar');
  if (file && file.size > MAX_IMAGE_SIZE_IN_BYTES) {
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
}

const Profile = () => {
  const { user } = useOutletContext()
  const { name, email } = user

  return (
    <section className="flex flex-col">
      <Form method="post" className="bg-white px-4 py-6 w-[90vw] max-w-sm drop-shadow-sm" encType='multipart/form-data'>
        {/* profile image container */}
        <FileInputContainer {...{ titleText:"Profile Image", maxSizeForImagesInBytes:MAX_IMAGE_SIZE_IN_BYTES, inputName:"avatar" }}/>
        
        <InputContainer type="text" name="name" labelText="name" defaultValue={user?.name}/>
        <InputContainer type="email" name="email" labelText="email" defaultValue={user?.email} />

        <SubmitBtn {...{defaultText: "Update Profile", submittingText: "Updating Profile..."}}/>
      </Form>
    </section>
  )
}

export default Profile