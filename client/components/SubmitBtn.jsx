import React from 'react'
import { useNavigation } from "react-router-dom"

/**
 * 
 * @param {String} defaultText - default is Submit
 * @param {String} submittingText - default Submitting...
 * @returns 
 */
const SubmitBtn = ({ defaultText, submittingText }) => {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === "submitting"

    return (
        <button 
            type="submit"
            className="btn-main w-full"
            disabled={isSubmitting}>
            {isSubmitting ? submittingText || "Submitting..." : defaultText || "Submit"}
        </button>
    )
}

export default SubmitBtn