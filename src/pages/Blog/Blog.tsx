import React from 'react';
import LinksToRepository from "./components/linksToRepository/linksToRepository";
import Lesson from "./components/lesson/Lesson";
import styles from './styles.module.scss'

const Blog = () => {
    return (
        <div className={styles.Container}>
            <LinksToRepository />
            <Lesson />
        </div>
    );
};

export default Blog;
