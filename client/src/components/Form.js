import style from '../assets/css/Form.module.css'

export default function Form(props) {
    return <form id="new-item-form" className={style.form} onSubmit={async (e) => await props.funcSubmit(e, props.itemId)}>
    <h2 className={style.formtitle}>{props.title}</h2>
    <div className={style.inputsarea}>
        <div className={style.inputfield}>
            <label htmlFor="codeInput">Código</label>
            <input onChange={(e) => props.funcHandle(e)} type="number" id="codeInput" className={style.input}/>
        </div>
        <div className={style.inputfield}>
            <label htmlFor="descriptionInput">Descrição</label>
            <input onChange={(e) => props.funcHandle(e)} type="text" id="descriptionInput" className={style.input}/>
        </div>
        <div className={style.inputfield}>
            <label htmlFor="sizeInput">Tamanho</label>
            <input onChange={(e) => props.funcHandle(e)} type="text" id="sizeInput" className={style.input}/>
        </div>
    </div>
    <div className={style.btnfield}>
        <input type="submit" id="btnSend" value={props.type} className={style.btnsend}/>
    </div>
</form>
}