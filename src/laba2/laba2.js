// Лабараторна номер 2
// В цій лабараторній роботі пояснення выдпрацювання функції для пошуку потрібних нам тасок за допомогою
// пошукової стрічки як в гугл
// Наша функція

//Компонент TaskSearch дозволяє користувачу вводити текст для пошуку завдань і передає цей текст
//(після затримки) у зовнішню функцію onChange. Ось як це працює покроково:
const TaskSearch = (props) => {
    const { onChange } = props

    //Ініціалізація searchParams та setSearchParams для роботи з параметрами запиту в URL,
    //встановлюючи початкове значення searchQuery як порожній рядок.
    const [searchParams, setSearchParams] = useSearchParams({ searchQuery: '' })

    //Ініціалізація value зі значенням searchQuery з параметрів запиту.
    // setValue використовується для оновлення цього стану.
    const [value, setValue] = useState(searchParams.get('searchQuery'))
    //Використання useDebouncedValue для створення затриманого значення debounced,
    // яке оновлюється через 1000 мілісекунд після останньої зміни value.
    const [debounced] = useDebouncedValue(value, 1000)

    //Виклик onChange з затриманим значенням debounced. Оновлення параметрів запиту searchQuery з цим значенням.
    // Ефект виконується кожного разу, коли змінюється debounced.
    useEffect(() => {
        onChange?.(debounced)
        setSearchParams((prev) => {
            prev.set('searchQuery', debounced)

            return prev
        })
    }, [debounced])

    return (
        //Рендеринг компоненту TextInput з поточним значенням value.
        // При зміні тексту викликається setValue для оновлення value.
        <TextInput
            rightSectionPointerEvents="none"
            rightSection={icon}
            placeholder="Your text"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
        />
    )
}
//Дебаунсинг: Використання useDebouncedValue дозволяє уникнути частих викликів onChange під час введення тексту, викликаючи його лише після затримки.
// URL-параметри: Використання useSearchParams для збереження стану пошуку в URL, що дозволяє легко ділитися посиланнями на результати пошуку.
// Реактивність: Компонент реагує на зміни debounced і автоматично оновлює як стан, так і URL.
