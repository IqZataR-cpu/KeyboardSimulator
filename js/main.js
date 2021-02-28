const KEYBOARD_RU = [
    "Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "&#8592;",
    "&#11134;", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\",
    "Caps", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "enter",
    "Shift", "\\", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".,", "shift",
    "Ctrl", "Fn", "St", "Alt", "____", "Alt", "Fn", "&#129695;", "Ctrl"
]

const KEYBOARD_EN = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "&#8592;",
    "&#11134;", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\",
    "Caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "enter",
    "Shift", "\\", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift",
    "Ctrl", "Fn", "St", "Alt", "____", "Alt", "Fn", "&#129695;", "Ctrl"
]

const TEXTS_RU = {
    "1": "Коала проводит на дереве почти всю жизнь и редко спускается на землю, чтобы перелезть на другое дерево. Малыши подрастают в сумке матери, а затем перебираются ей на спину. У коал изысканный вкус, из сотен видов эвкалипта ограничиваются примерно 12. Коалы прекрасно приручаются. Они привязываются к людям, которые за ними ухаживают, часто \"плачут\", когда их оставляют, успокаиваются, когда их ласкают.",
    "2": "Можно перепутать тираннозавра с курицей? Конечно же, нет! Тираннозавр, как известно, искусный и сообразительный хищник, а курица - слабая и беззащитная птичка. Однако многолетние исследования и дискуссии позволили палеонтологам сделать вывод, что ближайшим живым родственником тираннозавра является цыпленок. Белок, найденный в выкопанных костях, содержится в организме современных птиц, а не рептилий.",
    "3": "Слово Акрополь в переводе с греческого означает \"верхний город\". Так в странах Древнего мира называли городскую крепость. Акрополь служил защитой во время опасности, там хранили сокровища и оружие города. Парфенон украшали скульптуры, а на высоте 12 метров сплошной полосой проходил знаменитый фриз, на котором были изображены более 227 животных и 365 человек. И главное, что ни одна фигура не повторялась!",
    "4": "Наибольшей пещерной системой мира считается Мамонтова, ее обнаружили около 200 лет назад в бассейне притока реки Миссисипи. Это сложный многоэтажный лабиринт, состоящий из гротов, переходов и колодцев, расположенных на пяти ярусах. К 1900 г. было известно около 200 ходов Мамонтовой пещеры. Сейчас здесь располагается Национальный парк, который включен в список объектов Всемирного наследия ЮНЕСКО.",
    "5": "Современный мир создан для людей, которые все делают правой рукой. Письменные и кухонные принадлежности, двери и замки, компьютерные мыши и многое другое создаются для праворуких. Остальные приспосабливаются. К счастью, леворуких школьников уже не заставляют писать правой. Но по-прежнему иногда встречаются родители, воспитатели или даже учителя, которые пытаются переучить \"неправильного ребенка\".",
    "6": "Ежегодный кубинский карнавал - это незабываемое зрелище, на которое приезжают посмотреть тысячи людей. Танцы, фейерверки, шествия на набережной в Гаване, знаменитые ритмы кубинской музыки никого не оставят равнодушным. Фестиваль зародился в далеком прошлом, когда после сбора сахарного тростника африканские рабы устраивали красочные шествия. И хотя рабства на Кубе уже давно нет, традиция праздника сохранилась."
}

const TEXTS_EN = {
    "1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ducimus illo iste laudantium quia. Ab accusamus adipisci animi, assumenda aut beatae delectus dicta eum excepturi exercitationem facilis, harum hic id illum in iste itaque minus neque nihil perspiciatis quia quis reprehenderit vel velit voluptas. Accusantium amet earum esse harum id impedit laborum maxime nesciunt, sapiente totam. Adipisci aperiam asperiores blanditiis corporis cum deleniti deserunt dolores eaque eius eligendi eum expedita explicabo fugiat fugit hic ipsa iste magni maxime obcaecati perferendis perspiciatis possimus quaerat quis, rem rerum sapiente sint tempora tenetur totam ullam vel velit veritatis voluptatibus? Cupiditate dolores nobis quas quidem? Assumenda consectetur deserunt doloremque incidunt iure necessitatibus numquam, odit officia praesentium recusandae? Accusantium blanditiis commodi ipsa natus nemo officiis quam sequi tempore! A alias aliquam assumenda at, cumque dolorem doloribus ex fugit harum, ipsum magni minima nihil officiis possimus quam quas quidem ratione rem reprehenderit veniam? Nisi, quam, quibusdam.\n",
    "2": "Accusamus, animi atque beatae consequatur corporis debitis dolorem, doloremque dolores earum enim eos eum eveniet excepturi in iste magni modi molestiae mollitia, nesciunt optio quaerat qui quo sequi tempora totam. Aspernatur commodi dolor eius est fuga, iusto laboriosam laborum molestiae obcaecati, officia quia quibusdam sint tempore. Ab, ducimus excepturi explicabo facere incidunt iste, magnam minus nisi nulla optio quidem quisquam tenetur vel? Animi delectus eos excepturi laboriosam laudantium, non nulla numquam quia quibusdam? Beatae distinctio dolor porro quae? A adipisci dolore hic, illo omnis pariatur praesentium repellendus! Illo, nostrum sit. Ad aliquam blanditiis deserunt distinctio dolor doloremque doloribus ea est expedita fuga hic, illo illum incidunt inventore ipsam labore laboriosam magni omnis pariatur, provident qui quod recusandae tempore tenetur totam ut voluptatem?\n",
    "3": "Dolores eaque ex obcaecati provident quaerat sit voluptates. Aspernatur culpa deleniti nihil officiis quis tempore! Accusamus, architecto at consequuntur culpa deleniti distinctio dolorem doloremque eius esse eveniet facere illo laboriosam nihil officiis omnis pariatur, quibusdam repellat sapiente sequi, similique sint tempora voluptates. Accusamus ad beatae dicta dignissimos dolor, ea harum id iure laudantium nam nesciunt nihil obcaecati odio odit officia, pariatur perferendis provident quis sed sequi, sit veniam voluptatum? Assumenda blanditiis corporis, ea est incidunt iure maxime natus, nesciunt nisi, quod repellendus voluptatem. Aspernatur cumque, dignissimos dolorem dolores enim exercitationem natus nisi quas quibusdam reiciendis, sint totam unde vitae voluptas voluptatem. Accusantium aliquam beatae blanditiis dignissimos doloribus, ducimus eaque enim hic, iste, itaque laborum laudantium maiores modi nostrum obcaecati perferendis perspiciatis possimus quaerat ratione rem repellendus sequi sunt tempora vel veritatis voluptatem voluptatum? Ad, alias atque autem, blanditiis illo iste libero, natus officia soluta totam vel voluptatem. A alias aspernatur assumenda cupiditate dolor explicabo impedit labore maiores natus nostrum porro, quaerat, quasi quod reiciendis reprehenderit vel, voluptate. In quas, sunt. Aliquam exercitationem hic laboriosam magnam neque quos reprehenderit sapiente veritatis voluptas. Ad adipisci aliquid cum deleniti dignissimos eligendi, expedita facere, facilis, magni natus nobis odit officia quae quaerat quia repellendus tenetur. A adipisci aut beatae consequatur culpa harum id iste nesciunt nobis, non perferendis similique. Aspernatur, at eius esse impedit nulla ratione ullam voluptatem? Cumque deserunt exercitationem obcaecati quidem reprehenderit! Ad adipisci aliquam aspernatur at atque blanditiis consectetur distinctio dolore doloremque doloribus ducimus ea error eum eveniet expedita explicabo, harum illum iusto nemo nesciunt nisi nulla officia, officiis placeat quam quidem, sapiente soluta tempora tempore tenetur totam veritatis vero voluptatem? Accusamus, consequuntur corporis cum cumque eligendi et facere in ipsa, labore maiores mollitia natus nobis, perspiciatis porro quia quis reiciendis repellendus tenetur ut voluptatem! Doloremque, nisi, suscipit. A aliquam assumenda debitis dicta dignissimos, dolorem dolorum ducimus eaque harum ipsam labore laudantium magnam nam nesciunt numquam odit officia officiis quaerat quam quibusdam quo, ratione rerum saepe sapiente sint sit temporibus tenetur unde vitae voluptatem. Alias corporis, cum eius, ex exercitationem ipsum itaque, magni minima necessitatibus nobis non pariatur reprehenderit vitae! At distinctio facilis fugit hic inventore numquam quia voluptatibus! Accusantium alias assumenda corporis cumque delectus doloremque error eum facilis iure natus nesciunt perspiciatis quam quia quisquam, quod tenetur totam veniam voluptatum? Pariatur.",
    "4": "Accusantium aut corporis, dolorem et eum ex, inventore nam neque placeat rerum suscipit tenetur. Aspernatur cum illo nisi optio quaerat! Accusantium aliquam dolor voluptatem. At deserunt et nisi sapiente. Aliquid autem consectetur corporis delectus dicta dolor dolores error exercitationem id ipsa nam natus nulla, placeat, quae quia quibusdam sequi suscipit vitae?",
    "5": "Aliquam autem consequatur corporis cum deleniti dignissimos distinctio ea error incidunt inventore iure laborum libero minima, nihil officiis quibusdam rem repellat, sapiente similique voluptatum. Cumque in sint voluptates. Adipisci aperiam cupiditate delectus esse excepturi harum, ipsum, iste, iure nisi possimus provident quisquam ratione reiciendis repellendus sint tenetur totam vero vitae! A alias aliquam aut, commodi debitis deserunt est et facere nesciunt nostrum nulla provident quaerat quasi sequi sint tempora velit veritatis? Accusantium asperiores commodi delectus ducimus est explicabo illo ipsa itaque laboriosam maiores, obcaecati officia porro quis quisquam quo reprehenderit sint sit, sunt tempora unde? Accusamus alias atque dolores fugit, iste itaque laboriosam maiores tempora vel vero? Dignissimos eius harum impedit mollitia nesciunt, nihil veritatis. Accusamus accusantium alias autem cum distinctio dolorem dolorum, eum excepturi explicabo inventore ipsam laborum nam nemo nostrum obcaecati officiis perferendis ratione, suscipit unde voluptatem? Aliquid asperiores blanditiis consectetur consequatur cupiditate debitis, eaque error illum ipsam iusto nihil numquam provident quae quas quos rerum tempore vel voluptates? Aliquam blanditiis debitis ducimus eius eveniet harum illum labore laborum maxime neque nesciunt, nisi officiis praesentium quidem sunt temporibus ullam veritatis voluptas! A aut corporis cum dolor facere ipsa ipsum itaque iusto minus numquam provident quos, recusandae, rerum sed voluptate. Alias animi cumque deleniti dignissimos dolorem doloremque eius esse exercitationem iure minus mollitia neque numquam obcaecati, optio possimus provident qui repellat sint vero voluptatum? Corporis eius et incidunt mollitia quam repellendus! Accusantium alias dolor eligendi eos eveniet, impedit magni neque officia sunt voluptatibus. Accusantium, ad aliquam animi commodi corporis cum cumque deserunt dignissimos distinctio dolores eaque error est et ex harum hic id incidunt iste itaque iure laudantium, natus neque nihil numquam odit porro quasi qui sit suscipit tempore totam velit vitae voluptas voluptate voluptates voluptatibus voluptatum? Ab aliquid atque dignissimos dolores ex itaque neque quis quod ratione voluptatem? Adipisci amet cupiditate dolor eum eveniet harum id illo ipsa laudantium maxime nihil quod reprehenderit, saepe similique sit suscipit voluptatem. Consequuntur culpa cumque dolorum ea eaque illo, impedit ipsum labore magnam, numquam odit officiis porro quam quos repudiandae sit tempore temporibus ut, voluptatibus voluptatum! Aspernatur ducimus fugit id mollitia odit officiis quod suscipit! Atque eos, itaque. Accusamus amet animi corporis distinctio ducimus est, excepturi expedita id laborum, nam quis reiciendis soluta, velit? Consequuntur enim iusto optio quidem soluta. Autem commodi doloribus ea nostrum, quasi quidem similique totam? Aliquid aspernatur atque aut consequuntur dicta ducimus, ipsam laudantium quia unde. Adipisci animi aperiam consectetur corporis cumque dolore ipsa ipsum iure molestias nam necessitatibus neque, non officiis rem sunt. Illum impedit quae quisquam quod repellat repellendus voluptas. Ad architecto cumque eius enim eveniet exercitationem explicabo incidunt laudantium, molestias placeat provident, ratione saepe sapiente suscipit, tempora temporibus ut. Adipisci atque dolore doloribus facere fugit laboriosam nam, nesciunt, numquam odio officia officiis quae sed, voluptate. Amet, at autem inventore iusto magnam modi mollitia nesciunt velit voluptas voluptatibus? Molestiae mollitia, natus recusandae repudiandae sint suscipit velit. Amet aperiam aut commodi consequatur distinctio earum enim eum expedita labore nesciunt nobis non nulla odio officiis pariatur perspiciatis, quibusdam repellat tempore, totam unde ut vero voluptate. Accusamus architecto aspernatur autem cumque mollitia omnis possimus. Ab animi, at autem corporis culpa dolores dolorum eligendi eum eveniet fuga, harum ipsum non nostrum porro provident quibusdam quidem soluta veniam. Ad consectetur corporis iusto labore laborum nostrum veritatis. Ab accusamus amet aut deserunt dolores, dolorum ducimus ipsum iusto ullam veritatis? Aperiam error illo laborum nam nesciunt quas quisquam suscipit ut? Iste obcaecati, quidem? Ab beatae blanditiis consectetur cumque deleniti dolore dolorem ea enim esse eveniet excepturi expedita explicabo facilis fugiat inventore labore maxime nam numquam pariatur praesentium quaerat quam quis quod ratione, recusandae sequi similique tenetur unde vel veniam. Alias animi cum delectus dolorum natus nesciunt non quibusdam sint velit voluptatibus! Dolores impedit praesentium rem vero voluptate. Aperiam dolorem eos neque, perferendis placeat sequi voluptates? Adipisci alias cum debitis impedit iusto nostrum perferendis repellat?",
    "6": "Architecto debitis, esse est explicabo fugiat illo, impedit libero mollitia nam nostrum perspiciatis praesentium quae quibusdam reiciendis repellendus? At atque culpa error eveniet expedita illo inventore labore libero, nemo nostrum numquam ullam unde velit voluptatum."
}

const LANGUAGES = {
    "Ru": {
        "keyboard": KEYBOARD_RU,
        "texts": TEXTS_RU,
    },
    "En": {
        "keyboard": KEYBOARD_EN,
        "texts": TEXTS_EN,
    },
}


const KEYS = document.getElementsByClassName('key-text');

let currentLang = document.querySelector('#language');
let textWrapper = document.querySelector('#text');
let refresh = document.querySelector('#refresh');
let speed = document.querySelector('#speed');
let currentTextId = 0;
let currentText = "";
let currentPosition = 0;
let lastTime = 0;
let totalTime = 0;


let getLang = () => {
    return currentLang.value;
}

let setKeys = (language) => {
    LANGUAGES[language].keyboard.forEach((key, location) => {
        KEYS[location].innerHTML = key;
    })
}

let getText = (id, lang) => {
    return LANGUAGES[lang].texts[id];
}

function translateToKeyboardCode(symbol) {
    if (symbol == " ")
    {
        return "____";
    }

    if (symbol == "." || symbol == ",") {
        return ".,"
    }

    return symbol.toUpperCase();
}

function setNeedToPress() {
    let previousHint = document.querySelector('.need-to-press');

    if (previousHint)
        previousHint.classList.remove('need-to-press');

    let index = LANGUAGES[getLang()].keyboard.indexOf(translateToKeyboardCode(currentText[currentPosition]));
    KEYS[index].parentElement.classList.add('need-to-press')
}

let setText = () => {
    while (true)
    {
        let random = randomInt(1, 7);

        if (random != currentTextId) {
            currentTextId = random;
            break;
        }
    }

    currentText = getText(currentTextId, getLang())
    currentPosition = 0;
    textWrapper.innerHTML = "";
    setNeedToPress();

    for (symbol of currentText) {
        let symbolContainer = document.createElement('span');
        symbolContainer.innerHTML = symbol;

        textWrapper.append(symbolContainer);
    }
}

$(document).ready(function() {
    $('#language').select2();
    setKeys(getLang());
    setText();
});

$('#language').on('select2:select', event => {
    setKeys(event.target.value);
    setText();
})

refresh.onclick = setText;

document.onkeyup = event => {
    event.preventDefault();
    if (currentPosition >= currentText.length) {
        setText();
    }

    if (isTextStartedWith(event.key)) {
        let start = new Date().getTime();

        makePressed();
        if (lastTime != 0) {
            totalTime += start - lastTime;
            speed.innerHTML = Math.round((currentPosition + 1) / totalTime * 1000 * 60, 2) + " символов в минуту"
        }

        lastTime = start;
    } else {
        makeWrong()
    }
}

function makePressed() {
    let symbol = textWrapper.childNodes[currentPosition]
    symbol.classList.remove('wrong')
    symbol.classList.add('pressed');
    currentPosition++;
    setNeedToPress();
}

function makeWrong() {
    textWrapper.childNodes[currentPosition].classList.add('wrong');
}

function isTextStartedWith(symbol) {
    return currentText[currentPosition] == symbol
}

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}
