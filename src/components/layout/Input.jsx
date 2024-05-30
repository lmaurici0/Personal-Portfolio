import styles from '../../assets/css/Input.module.css'

function Input(){
    return(
        <>
            <input className={styles.main_input} type='text' name='sendInput' placeholder='Digite sua mensagem...'/>
        </>
    )
}

export default Input
