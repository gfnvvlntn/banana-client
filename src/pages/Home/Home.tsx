import React from 'react';
import Typography from "../../components/base/typography/Typography";
import styles from './styles.module.scss'
import Icon from "../../components/base/icon/Icon";
import Photo1 from '../../assets/image/photo1.jpg'
import Photo2 from '../../assets/image/photo2.jpg'
import { infoList} from "./common";


const Home = ():React.ReactElement => {
    return (
        <div className={styles.Container}>
            <Typography modifier={'H1'}>
                Привет! Меня зовут Валентин. <br/>
                Моё любимое занятие — программирование. <br/>
                И вот несколько ответов на вопрос почему:
            </Typography>
            <div className={styles.Content}>
                <div className={styles.Description}>
                    {infoList.map((info, index) => (
                        <div key={index} className={styles.DescriptionItem}>
                        <Icon variant={'chevron-circle-right'} modifier={"size24"}/>
                        <Typography modifier={'Text1'}>{info}</Typography>
                        </div>
                    ))}
                </div>
                <div className={styles.Photos}>
                    <img className={styles.Photo} src={Photo1} alt="фото в старших классах"/>
                    <img className={styles.Photo} src={Photo2} alt="последнее селфи"/>
                </div>
            </div>
        </div>
    );
};

export default Home;
