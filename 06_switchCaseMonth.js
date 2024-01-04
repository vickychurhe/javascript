

function monthOfTheYear(monthNum){
    switch (monthNum) {
        case 1:
            console.log(`Month Number ${monthNum} --- January`);
            break;
            case 2:
                console.log(`Month Number ${monthNum} --- February`);
                break;
                case 3:
            console.log(`Month Number ${monthNum} --- March`);
            break;
            case 4:
            console.log(`Month Number ${monthNum} --- April`);
            break;
            case 5:
            console.log(`Month Number ${monthNum} --- May`);
            break;
            case 6:
            console.log(`Month Number ${monthNum} --- June`);
            break;
            case 7:
            console.log(`Month Number ${monthNum} --- July`);
            break;
            case 8:
            console.log(`Month Number ${monthNum} --- Augest`);
            break;
            case 9:
            console.log(`Month Number ${monthNum} --- September`);
            break;
            case 10:
            console.log(`Month Number ${monthNum} --- October`);
            break;
            case 11:
            console.log(`Month Number ${monthNum} --- November`);
            break;
            case 12:
            console.log(`Month Number ${monthNum} --- December`);
            break;
        default:
            console.log(`Invalid Input --> Month Number ${monthNum}`);
            break;
    }

}
monthOfTheYear(0);
monthOfTheYear(2);
monthOfTheYear(5);
monthOfTheYear(12);
monthOfTheYear(15);
monthOfTheYear(100);
monthOfTheYear(null);
monthOfTheYear(undefined);


