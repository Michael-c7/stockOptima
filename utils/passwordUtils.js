import bcrypt from 'bcryptjs'

const hashPassword = async (password) => {
    // a random value that is added to the password before hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt); // bigger the value, more secure but will take longer to hash it
    return hashedPassword
}


export { hashPassword }