import React, { FC } from 'react'
import style from "./footer-list.module.scss"
import Link from '../../../../node_modules/next/link'

interface FooterListProps {
    data : {
        title: string
        content : Array<{link: string, title : string}>
    }
}

export const FooterList: FC<FooterListProps> = ({data}) => {
  return (
    <ul className={style.footerListCol}>
        <li className={style.footerListCol}>
            <h3 className={style.footerListTitle}>{data.title}</h3>
            {data.content.map(item => (
                <Link className={style.footerListLink} href={item.link} key={item.link}>
                    {item.title}
                </Link>
            ))}
        </li>
    </ul>
  )
}
