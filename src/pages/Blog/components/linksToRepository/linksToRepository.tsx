import React from 'react';
import Typography from "../../../../components/typography/Typography";
import Button from "../../../../components/button/Button";
import styles from './styles.module.scss'
import toast from 'react-hot-toast';
const LinksToRepository = () => {
    const copyFrontEndLink = async () => {
        await navigator.clipboard.writeText('https://github.com/gfnvvlntn/banana-client').then(() => {
            toast.success('ссылка скопировна')
        });
    }
    const copyBackEndLink = async () => {
        await navigator.clipboard.writeText('https://github.com/gfnvvlntn/banana-server').then(() => {
            toast.success('ссылка скопировна')
        });
    }
    return (
        <div className={styles.Container}>
            <Typography modifier={'Text1'}>Перед тем как ознакомиться с крутой фишкой CSS, получи ссылки с исходниками приложения</Typography>
            <Button onClick={copyBackEndLink}  className={styles.Button} modifier={'yellow'}>Backend</Button>
            <Button onClick={copyFrontEndLink} className={styles.Button} modifier={'yellow'}>Frontend</Button>
        </div>
    );
};

export default LinksToRepository;
