import React from "react";
import cls from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  console.log(props);
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogItems}>
        {props.dialogs.map(dialog => {
          return (
            <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
          );
        })}
      </div>
      <div className={cls.messages}>
        {props.messages.map(message => {
          return <Message key={message.id} message={message.message} />;
        })}
      </div>
    </div>
  );
};

export default Dialogs;
