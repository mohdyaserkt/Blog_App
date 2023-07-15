import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
const footer = () => {
    return (
        <div className={styles.container}>
            <div>©2023 Lamamia. All rights reserved</div>
            <div className={styles.social}>

                <Image src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" width={20} height={20} className={styles.icon} alt="Lama dev Face book" />
                <Image src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png" width={20} height={20} className={styles.icon} alt="Lama dev" />
                <Image src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" width={20} height={20} className={styles.icon} alt="Lama dev" />
                <Image src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png" width={20} height={20} className={styles.icon} alt="Lama dev" />
                



            </div>
        </div>
    )
}

export default footer