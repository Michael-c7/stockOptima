import bcrypt from 'bcryptjs'

export const hashPassword = async (password) => {
    // salt is a random value that is added to the password before hashing to make it more secure
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt); // bigger the value, more secure but will take longer to hash it
    return hashedPassword
}



export const comparePassword = async (password, hashedPassword) => {
    const isMatch = await bcrypt.compare(password, hashedPassword)
    return isMatch
}