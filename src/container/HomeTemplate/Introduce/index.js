import React, { Component } from "react";
import ThanhLienKet from "../../../components/ThanhLienKet";
import { Link } from "react-router-dom";
import { sdt, urlApi } from "../../../config/api";
import Footer from "../Footer";

class Introduce extends Component {
    componentDidMount() {
        document.title = "Dich vụ công | Giới thiệu";
    }
    render() {
        return ( <
            >
            <
            div className = "mt-5 pt-5" >
            <
            ThanhLienKet key = "1"
            text1 = "Trang chủ"
            link1 = "/"
            text2 = "Giới thiệu"
            link2 = "/introduce" /
            >
            <
            div className = "container" >
            <
            h2 > Giới thiệu về Cổng Dịch vụ công < /h2> <
            div className = "my-2" >
            <
            img src = { process.env.PUBLIC_URL + "/img/gioi-thieu-slider.png" }
            className = "w-100"
            alt = "gioi-thieu-slider" /
            >
            <
            /div> <
            p className = "text-justify text-break" >
            Với quan điểm công khai, minh bạch, lấy người dân, doanh nghiệp làm trung tâm phục vụ, Cổng Dịch vụ công kết nối, cung cấp thông tin về thủ tục hành chính và dịch vụ công trực tuyến; hỗ trợ thực hiện, giám sát, đánh giá việc giải quyết thủ tục hành chính, dịch vụ công trực tuyến và tiếp nhận, xử lý phản ánh, kiến nghị của cá nhân, tổ chức trên toàn quốc. <
            /p> <
            p className = "text-justify text-break" >
            Cá nhân, tổ chức dễ dàng truy cập Cổng Dịch vụ công tại địa chỉ duy nhất: http: //localhost:3000/ 
            theo nhu cầu người dùng từ máy tính, máy tính bảng hoặc điện thoại di động được kết nối internet để hưởng nhiều lợi ích từ Cổng Dịch vụ công, như:
            <
            /p> <
            div className = "row" >
            <
            div className = "col-4 mb-3" >
            <
            div className = "rounded-circle bg-yellow text-center mb-2"
            style = {
                { width: 50, height: 50, fontSize: "1.3rem" }
            } >
            <
            i className = "fa fa-user  mt-3" > < /i> < /
            div > <
            p className = "text-justify text-break" >
            Đăng ký và được cấp ngay một tài khoản của Cổng dịch vụ công Quốc gia để đăng nhập; <
            /p> < /
            div > <
            div className = "col-4 mb-3" >
            <
            div className = "rounded-circle bg-yellow text-center mb-2"
            style = {
                { width: 50, height: 50, fontSize: "1.3rem" }
            } >
            <
            i className = "fa fa-search  mt-3" > < /i> < /
            div > <
            p className = "text-justify text-break" >
            Tra cứu thông tin, dịch vụ công các ngành, lĩnh vực, các địa phương tại Cơ sở dữ liệu quốc gia về thủ tục hành chính; Gửi phản ánh kiến nghị liên quan đến việc giải quyết thủ tục hành chính, dịch vụ công; <
            /p> < /
            div > <
            div className = "col-4 mb-3" >
            <
            div className = "rounded-circle bg-yellow text-center mb-2"
            style = {
                { width: 50, height: 50, fontSize: "1.3rem" }
            } >
            <
            i className = "fa fa-check  mt-3" > < /i> < /
            div > <
            p className = "text-justify text-break" >
            Đề nghị hỗ trợ thực hiện thủ tục hành chính, dịch vụ công qua Tổng đài điện thoại { sdt }
            hoặc trực tuyến tại mục Hỗ trợ; <
            /p> < /
            div > <
            div className = "col-4 mb-3" >
            <
            div className = "rounded-circle bg-yellow text-center mb-2"
            style = {
                { width: 50, height: 50, fontSize: "1.3rem" }
            } >
            <
            i className = "fa fa-check  mt-3" > < /i> < /
            div > <
            p className = "text-justify text-break" >
            Theo dõi toàn bộ quá trình giải quyết thủ tục hành chính và xử lý phản ánh kiến nghị của mình bằng cách cung cấp mã hồ sơ, kể cả mã hồ sơ thủ tục hành chính không thực hiện qua Cổng Dịch vụ công Quốc gia, Cổng Dịch vụ công của Bộ, ngành, địa phương; <
            /p> < /
            div > <
            div className = "col-4 mb-3" >
            <
            div className = "rounded-circle bg-yellow text-center mb-2"
            style = {
                { width: 50, height: 50, fontSize: "1.3rem" }
            } >
            <
            i className = "fa fa-info  mt-3" > < /i> < /
            div > <
            p className = "text-justify text-break" >
            Đăng nhập bằng tài khoản Cổng dịch vụ công Quốc gia để đăng nhập các Cổng Dịch vụ công của Bộ, ngành, địa phương; không phải cập nhật các trường thông tin, tài liệu đã được lưu trữ trong tài khoản Cổng Dịch vụ công Quốc gia; <
            /p> < /
            div > <
            div className = "col-4 mb-3" >
            <
            div className = "rounded-circle bg-yellow text-center mb-2"
            style = {
                { width: 50, height: 50, fontSize: "1.3rem" }
            } >
            <
            i className = "fa fa-clipboard  mt-3" > < /i> < /
            div > <
            p className = "text-justify text-break" >
            Được hỗ trợ truy vấn thông tin của cá nhân, tổ chức lưu trữ tại các Cơ sở dữ liệu, Hệ thống thông tin đã tích hợp với Cổng Dịch vụ công Quốc gia như đăng ký kinh doanh, thuế, bảo hiểm, …; <
            /p> < /
            div > <
            div className = "col-4 mb-3" >
            <
            div className = "rounded-circle bg-yellow text-center mb-2"
            style = {
                { width: 50, height: 50, fontSize: "1.3rem" }
            } >
            <
            i className = "fa fa-gavel  mt-3" > < /i> < /
            div > <
            p className = "text-justify text-break" >
            Thực hiện thủ tục hành chính tại nhiều tỉnh, thành phố chỉ cần khai báo 1 lần trên Cổng Dịch vụ công Quốc gia; <
            /p> < /
            div > <
            div className = "col-4 mb-3" >
            <
            div className = "rounded-circle bg-yellow text-center mb-2"
            style = {
                { width: 50, height: 50, fontSize: "1.3rem" }
            } >
            <
            i className = "fa fa-user  mt-3" > < /i> < /
            div > <
            p className = "text-justify text-break" >
            Sử dụng tài khoản của các ngân hàng, trung gian thanh toán để thanh toán trực tuyến phí, lệ phí thực hiện thủ tục hành chính; dịch vụ công; <
            /p> < /
            div > <
            div className = "col-4 mb-3" >
            <
            div className = "rounded-circle bg-yellow text-center mb-2"
            style = {
                { width: 50, height: 50, fontSize: "1.3rem" }
            } >
            <
            i className = "fa fa-smile  mt-3" > < /i> < /
            div > <
            p className = "text-justify text-break" >
            Đánh giá sự hài lòng trong giải quyết thủ tục hành chính; <
            /p> < /
            div > <
            /div> < /
            div > <
            /div> <
            div className = "bg-yellow" >
            <
            div className = "container pt-3" >
            <
            div className = "container px-5" >
            <
            p className = "text-center text-black mx-5"
            style = {
                { fontSize: " 1.3rem" }
            } >
            Các Bộ, ngành, địa phương nỗ lực cùng với sự tham gia tích cực của người dân và doanh nghiệp trong vận hành Cổng Dịch vụ công Quốc gia là góp phần xây dựng Chính phủ liêm chính, hành động,
            phát triển, phục vụ Nhân Dân <
            /p> < /
            div >

            <
            /div> < /
            div >

            <
            Footer / >
            <
            />
        );
    }
}

export default Introduce;