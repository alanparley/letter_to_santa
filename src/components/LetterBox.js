import Letter from './Letter'

const LetterBox = () => {
    return (
        <>
            <h2> This is the Letterbox component </h2>
            <ul>

                <Letter author="Chris">
                    Hello Santa
                </Letter>
            </ul>

        </>
    )
}

export default LetterBox;