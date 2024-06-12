// Лабараторна номер 2
// Зміна загального кольору всієї теми в нашій програмі за допомогою case
// Наша функція

case THEME_EDITOR_CONTEXT_ACTIONS.CHANGE_PRIMARY_COLOR: {

    //Це витягує значення primary з об'єкта payload в дії.
    const { primary } = action.payload

    return {
        //...state - це оператор розпаковки, який копіює всі існуючі властивості стану (state).
        ...state,
        //primaryColor: 'customPrimary' - оновлює властивість primaryColor значенням 'customPrimary'.
        primaryColor: 'customPrimary',
        //colors: { customPrimary: generateColors(primary) } - додає нову властивість colors, де customPrimary є ключем,
        // а значенням є результат функції generateColors(primary).
        colors: {
            //Припустимо, що функція generateColors приймає початковий колір (primary) і генерує набір кольорів на його основі.
            // Цей набір кольорів потім зберігається під ключем customPrimary в об'єкті colors.
            customPrimary: generateColors(primary)
        }
    }
}
//Вся структура стану (state) зберігається з усіма існуючими властивостями за допомогою ...state.
// Властивість primaryColor оновлюється на 'customPrimary'.
// Додається нова властивість colors, яка містить об'єкт з ключем customPrimary і значенням, згенерованим функцією generateColors(primary).