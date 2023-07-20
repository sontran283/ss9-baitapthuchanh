// so sanh switch case
// so sanh switch case

let choise = +prompt("nhap vao so bat ky");
switch (choise) {
    case 0:
        // khoi code thuc thi
        document.write("so 0")
        break;
    case 1:
        // khoi code thuc thi
        document.write("so mot")
        break;
    case 2:
        // khoi code thuc thi
        document.write("so hai")
        break;
    case 3:
        // khoi code thuc thi
        document.write("so ba")
        break;
    case 4:
        // khoi code thuc thi
        document.write("so bon")
        break;
    case 5:
        // khoi code thuc thi
        document.write("so nam")
        break;
    case 6:
        // khoi code thuc thi
        document.write("so sau")
        break;
    case 7:
        // khoi code thuc thi
        document.write("so bay")
        break;
    case 8:
        // khoi code thuc thi
        document.write("so tam")
        break;
    case 9:
        // khoi code thuc thi
        document.write("so chin")
        break;
    default:
        document.write("khong hop le")
}


//  dem so ngay trong 1 thang
//  dem so ngay trong 1 thang

let month = +prompt("nhap so thang bat ky");
switch (month) {
    case 1:
        document.write("30 ngay")
        break;
    case 2:
        document.write("28 ngay")
        break;
    case 3:
        document.write("30 ngay")
        break;
    case 4:
        document.write("30 ngay")
        break;
    case 5:
        document.write("30 ngay")
        break;
    case 6:
        document.write("30 ngay")
        break;
    case 7:
        document.write("29 ngay")
        break;
    case 8:
        document.write("30 ngay")
        break;
    case 9:
        document.write("30 ngay")
        break;
    case 10:
        document.write("30 ngay")
        break;
    case 11:
        document.write("31 ngay")
        break;
    case 12:
        document.write("30 ngay")
        break;
    default:
        console.warn("nhap khong hop le")  //mau vang
        console.error("nhap khong hop le")  //mau do



    case 1:
    case 3:
    case 5:
        console.log(`so ngay trong thang ${month}la 31 ngay`);
        break;
}


//  toan tu 3 ngoi
let rs = (x % 2 == 0) ? ("chia het cho 2") : ("khong chia het cho 2")
console.log(rs);

