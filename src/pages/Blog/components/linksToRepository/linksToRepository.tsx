import React from 'react';
import Typography from "../../../../components/base/typography/Typography";
import styles from './styles.module.scss'
const LinksToRepository = () => {
    return (
        <div className={styles.Container}>
            <Typography modifier={'Text1'}>Перед тем как ознакомиться с крутой фишкой CSS, <br/> получи ссылки с исходниками приложения</Typography>
            <div className={styles.LinkList}>
                <div className={styles.LinkItem}>
                    <Typography modifier={'Text1'}>Backend -</Typography>
                    <Typography modifier={'Text2'}><a href="https://github.com/gfnvvlntn/banana-server" className={styles.Link} target={'_blank'}  rel="noreferrer">https://github.com/gfnvvlntn/banana-server</a></Typography>
                </div>
                <div className={styles.LinkItem}>
                    <Typography modifier={'Text1'}>Frontend -</Typography>
                    <Typography modifier={'Text2'}><a href="https://github.com/gfnvvlntn/banana-server" className={styles.Link} target={'_blank'}  rel="noreferrer">https://github.com/gfnvvlntn/banana-server</a></Typography>
                </div>
            </div>
        </div>
    );
};

export default LinksToRepository;
