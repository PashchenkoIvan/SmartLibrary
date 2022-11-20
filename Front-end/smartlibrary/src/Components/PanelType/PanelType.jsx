import s from './PanelType.module.css';

const Button = props => {
    return(
        <button className={s.btn}>{props.btnText}</button>
    );
}

let btnMap = [
    {name: 'Список читачів'},
    {name: 'Список книг'},
    {name: 'Заявки'},
    {name: 'Заходи'},
    {name: 'Звіти з заходів'},
    {name: 'Річна звітність'},
    {name: 'Інвентарізація'},
    {name: 'Бібліотекарі'},
    {name: 'Філіі'},
    {name: 'Новини'},
    {name: 'Звіти до новини'},
    {name: 'Відвідувачі'}
];

const PanelType = () => {
    let btnMapAdd = btnMap.map(b => <Button btnText={b.name}/>)
    return(
        <div className={s.container}>
            {btnMapAdd}
        </div>
    );
}

export default PanelType;