interface IFormValidationMessageProps {
    message: string
}
export default function FormValidationMessage({ message }: IFormValidationMessageProps) {
    return (
        <p className='text-center text-xl text-red-600'>{message}</p>
    )
}