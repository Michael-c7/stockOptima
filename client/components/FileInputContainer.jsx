import React from 'react'
import { bytesToMegabytes } from '../utils/misc'

/**
 * 
 * @param {String} titleText - the tile text eg: Profile Image
 * @param {Number} maxSizeForImagesInBytes - the max size in bytes for the image
 * @param {String} inputName - Used for the id and name of the input for the image
 * @returns 
 */
const FileInputContainer = ({ titleText, maxSizeForImagesInBytes, inputName }) => {
    const [profileImage, setProfileImage] = React.useState(null)
    const [profileImageSize, setProfileImageSize] = React.useState(0)
    const [profileImageTooBig, setProfileImageTooBig] = React.useState(false)
    let maxSizeForImagesInMB = bytesToMegabytes(maxSizeForImagesInBytes)
    let isImageTooBigStyles = profileImageTooBig ? `text-red-500` : undefined


    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setProfileImage(URL.createObjectURL(event.target.files[0]));
        }        
        setProfileImageSize(bytesToMegabytes(event.target.files[0].size))
        setProfileImageTooBig(event.target.files[0].size > maxSizeForImagesInBytes ? true : false)
    }


    return (
        <div>
            <h2 className="text-lg">{titleText}</h2>
            <p className=" text-xs mb-2">Current file size : <span className={isImageTooBigStyles}>
                {profileImageSize}MB </span>(Max {maxSizeForImagesInMB}MB)
            </p>
            <div className="border flex items-center p-2">
                <input type="file"
                    id={inputName}
                    name={inputName}
                    className="p-1 mr-2"
                    accept="image/*"
                    onChange={onImageChange}
                />
            </div>
            {/* actual image that user selects here */}
            {profileImage ? ( 
            <img src={profileImage} alt={inputName} className="border border-t-0"/>
            ) : (
            <p className="my-2">No image chosen</p>
            )}
        </div>
    )
}

export default FileInputContainer

