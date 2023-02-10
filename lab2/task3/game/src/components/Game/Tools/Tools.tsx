import styles from "./Tools.module.css"
import Button from "./Button/Button"
import game from "../../../assets/game.png"
import dice from "../../../assets/dice.png"
import reset from "../../../assets/reset.png"
import solve from "../../../assets/solve.png"
import Timer from "./Timer/Timer";
import Level from "./Level/Level";

function Tools()
{
	return (
		<div className={styles.wrap}>
			<div className={styles.button_wrap}>
				<Button imageUrl={game} text={"New"}  action={() => console.log('Сбросить состояние до 1 уровня (началаьное состояние игры)')}/>
			</div>
			<div className={styles.button_wrap}>
				<Button imageUrl={dice} text={"Shuffle"}  action={() => {console.log('Перемещать пазлы на текущем уровне с сохранением времени')}}/>
			</div>
			<div className={styles.button_wrap}>
				<Button imageUrl={reset} text={"Reset"}  action={() => console.log('Обновляем картинку с сохранением уровня и сбрасыванием времени')}/>
			</div>
			<div className={styles.button_wrap}>
				<Button imageUrl={solve} text={"Solve"}  action={() => console.log('Показываем решение и опускаем игрока на уровень ниже')}/>
			</div>
			<Timer />
			<Level />
		</div>
	)
}

export default Tools