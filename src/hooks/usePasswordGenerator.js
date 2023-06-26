import { useState } from 'react'

const usePasswordGenerator = () => {
    const [password, setPassword] = useState();
    const [errormessage, setErrormessage] = useState();


    const generatepassword = (checkBoxData, length) => {
        let charset = '', generatedPassword = '';
        const selectedOption = checkBoxData.filter(checkbox => checkbox.state);
        if (selectedOption.length === 0) {
            setErrormessage("Please Select at least one option.");
            setPassword('');
            return;

        }
        selectedOption.forEach(element => {
            switch (element.title) {
                case "Include UpperCase Letters":
                    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    break;
                case 'Include LowerCase Letters':
                    charset += 'qwertyuiopasdfghjklzxcvbnm';
                    break;
                case 'Include Numbers':
                    charset += '0123456789';
                    break;
                case 'Include Symbols':
                    charset += '!@#$%^&*';
                    break;
                default:
                    break;

            }
        });

        for (let i = 0; i <length; i++) {
            const randomindex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomindex];
            
        }

        setPassword(generatedPassword);
        setErrormessage('')
    }

  return (
    {password,errormessage,generatepassword}
  )
}

export default usePasswordGenerator