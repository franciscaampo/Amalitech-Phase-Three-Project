import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { useForm } from '../../context/ContextTheme'
import { themeActions } from '../../context/ContextTheme'


export const Header = () => {
    const { state, dispatch} = useForm()

    const themeSwitcher = () => {
        dispatch({
            type: themeActions.setTheme,
            payload: state.theme === 'light' ? 'dark' : 'light'
        })
    }
  return (
    <S.Header theme = {state.theme}>
        <div className='container'>
            <Link to ="/"><h1>Where in the world?</h1></Link>
                <p onClick = {themeSwitcher}>
                    <i className={state.theme === 'light' ? 'far fa-moon' : 'fa fa-moon'}></i>
                    {state.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </p>
        </div>
    </S.Header>
  )
}

export default Header
