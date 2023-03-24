import React from 'react';
import Styles from "./style.module.css"
//import { BlogData } from '../../pages/blog/btext';
type Props = {
  item: item;

};
export type item = {
  name: string;
  email: string;
  msg: string;
  id: number


};

const ListMsg: React.FC<Props> = ({ item }) => {



  return (


    <div className={Styles.innermsg}>
      <h2>{item.name}</h2>
      <p>{item.email}</p>
      <p>{item.msg}</p>
      <i className={`fa-solid fa-trash-can ${Styles.myicon}`}></i>
      <i className={`fa-solid fa-pen-to-square ${Styles.myicon}`}></i>



    </div >


  );
};
export default ListMsg;