const M=[["p","1. Thông tin sản phẩm Eco Clean","Công dụng • quy cách • cách dùng"],["s","2. Kịch bản Sale New Eco Clean","Khai thác → tư vấn → chốt"],["i","3. Phân tích thành phần","Cơ chế & cách nói Sale"],["d","4. Từ điển chăn nuôi 3 miền","Thuật ngữ Bắc • Trung • Nam"],["a","5. Vật nuôi & Chuồng trại","Vật nuôi • loại chuồng • chu kỳ nuôi • hình minh họa"],["c","6. Kịch bản CSKH Eco Clean","Sau bán → hiệu quả → tái mua"],["q","7. Các câu hỏi liên quan","FAQ • phản đối • an toàn • kỹ thuật"]];
let S={m:"p",animal:"Heo",region:"Miền Nam",call:1,out:"",careCall:1,careTank:20};const $=x=>document.querySelector(x),$$=x=>document.querySelectorAll(x);
const C=(h,b,k="")=>`<div class="card ${k}"><h3>${h}</h3>${b}</div>`,H=(h,p)=>`<div class="hero"><small>ECO CLEAN • SALE & CSKH</small><h2>${h}</h2><p>${p}</p></div>`;
function nav(){$("#nav").innerHTML=M.map(x=>`<button data-m="${x[0]}" class="${S.m===x[0]?"on":""}"><b>${x[1]}</b><small>${x[2]}</small></button>`).join("");document.querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>{S.m=b.dataset.m;R()})}
function P(){let p=D.product;return H("Thông tin sản phẩm Eco Clean","Hồ sơ kỹ thuật → hoạt chất → cơ chế → liều → phối trộn → so sánh vôi.")+
`<div class="product-gallery"><figure><img src="assets/eco-clean-front.jpeg" alt="Eco Clean 1L mặt trước"><figcaption>Eco Clean 1L – hình sản phẩm</figcaption></figure><figure><img src="assets/eco-clean-hdsd.jpeg" alt="Hướng dẫn sử dụng Eco Clean trên nhãn"><figcaption>Nhãn hướng dẫn sử dụng</figcaption></figure><figure><img src="assets/eco-clean-nhan-sinh-khoi.jpeg" alt="Hướng dẫn nhân sinh khối Eco Clean"><figcaption>Hướng dẫn nhân sinh khối</figcaption></figure></div>`+
C("BẢNG GIÁ ECO CLEAN – Xử lý mùi & Môi trường",`
<div class="price-note"><b>Giá gốc: 550.000đ/chai 1L</b><span>Bảng giá bán + CTKM + chính sách CSKH theo ảnh bạn cung cấp.</span></div>
<div class="scroll"><table class="price-table">
<tr><th>Số thùng</th><th>Chai 1L</th><th>Số lít</th><th>Giá gốc</th><th>Mức CK</th><th>Tiết kiệm</th><th>Giá bán</th><th>1 chai còn</th><th>CTKM</th><th>CSKH 1</th><th>CSKH 2</th><th>CSKH 3</th><th>Giá 1 chai sau KM CSKH 1</th></tr>
<tr><td>—</td><td>1</td><td>1</td><td>550.000</td><td>30%</td><td>165.000</td><td><b>385.000</b></td><td>385.000</td><td>—</td><td>0</td><td>0</td><td>0</td><td>—</td></tr>
<tr><td>—</td><td>2</td><td>2</td><td>1.100.000</td><td>32%</td><td>352.000</td><td><b>748.000</b></td><td>374.000</td><td>—</td><td>0</td><td>0</td><td>0</td><td>—</td></tr>
<tr class="promo"><td>—</td><td>3</td><td>3</td><td>1.650.000</td><td>32%</td><td>528.000</td><td><b>1.122.000</b></td><td>374.000</td><td><b>Tặng 1</b></td><td>0</td><td>0</td><td>0</td><td><b>280.500</b></td></tr>
<tr><td>—</td><td>4</td><td>4</td><td>2.200.000</td><td>35%</td><td>770.000</td><td><b>1.430.000</b></td><td>357.500</td><td>—</td><td>0</td><td>0</td><td>0</td><td>—</td></tr>
<tr class="promo"><td>—</td><td>5</td><td>5</td><td>2.750.000</td><td>36%</td><td>990.000</td><td><b>1.760.000</b></td><td>352.000</td><td><b>Tặng 2</b></td><td>0</td><td>0</td><td>+ 01 chai</td><td><b>251.429</b></td></tr>
<tr><td>—</td><td>10</td><td>10</td><td>5.500.000</td><td>36%</td><td>1.980.000</td><td><b>3.520.000</b></td><td>352.000</td><td><b>Tặng 03</b></td><td>+ 01 chai</td><td>0</td><td>+ 01 chai</td><td><b>251.429</b></td></tr>
<tr class="promo"><td><b>01 thùng</b></td><td>20</td><td>20</td><td>11.000.000</td><td>38%</td><td>4.180.000</td><td><b>6.820.000</b></td><td>341.000</td><td><b>Tặng 8</b></td><td>+ 01 chai</td><td>+ 01 chai</td><td>0</td><td><b>235.172</b></td></tr>
<tr><td><b>02 thùng</b></td><td>40</td><td>40</td><td>22.000.000</td><td>40%</td><td>8.800.000</td><td><b>13.200.000</b></td><td>330.000</td><td><b>Tặng 16</b></td><td>+02 chai</td><td>+ 01 chai</td><td>0</td><td><b>227.586</b></td></tr>
<tr><td><b>05 thùng</b></td><td>100</td><td>100</td><td>55.000.000</td><td>42%</td><td>23.100.000</td><td><b>31.900.000</b></td><td>319.000</td><td><b>Tặng 2 thùng</b></td><td>+05 chai</td><td>+ 01 chai</td><td>0</td><td><b>220.000</b></td></tr>
<tr class="promo"><td><b>10 thùng</b></td><td>200</td><td>200</td><td>110.000.000</td><td>45%</td><td>49.500.000</td><td><b>60.500.000</b></td><td>302.500</td><td><b>Tặng 4 thùng</b></td><td>+ 10 chai</td><td>+03 chai</td><td>+02 chai</td><td><b>208.621</b></td></tr>
</table></div>
<div class="note"><b>Lưu ý cho Sale/CSKH:</b> Chính sách giá và quà tặng có thể thay đổi theo từng chương trình. Trước khi chốt đơn, đối chiếu chính sách đang áp dụng tại thời điểm bán.</div>
`)+
C("1. Nguồn gốc & xuất xứ",`<ul>${p.origin.map(x=>`<li>${x}</li>`).join("")}</ul><div class="note"><b>Lưu ý Sale:</b> Website không tự suy đoán quốc gia/nhà sản xuất. Cập nhật đúng theo nhãn, COA hoặc hồ sơ công bố chính thức khi công ty cung cấp.</div>`)+
C("2. Chỉ tiêu & Thành phần hoạt chất",`<div class="scroll"><table><tr><th>Thành phần</th><th>Chỉ tiêu</th><th>Vai trò chính</th></tr>${p.actives.map(x=>`<tr><td><b>${x[0]}</b></td><td>${x[1]}</td><td>${x[2]}</td></tr>`).join("")}</table></div>`)+
C("3. Cơ chế tác động cốt lõi",`<div class="mechanism">${p.mechanism.map(x=>`<div><b>${x[0]}</b><p>${x[1]}</p></div>`).join("")}</div>`)+
C("4. Công dụng",`<ul>${p.uses.map(x=>`<li>${x}</li>`).join("")}</ul>`)+
C("5. Liều lượng & lịch phun / tưới chuẩn",`<div class="scroll"><table><tr><th>Tình trạng</th><th>Liều pha</th><th>Cách dùng</th><th>Lịch/đánh giá</th></tr>${p.doses.map(x=>`<tr><td><b>${x[0]}</b></td><td>${x[1]}</td><td>${x[2]}</td><td>${x[3]}</td></tr>`).join("")}</table></div><p class="note"><b>Nguyên tắc:</b> ưu tiên phun/phủ khu phát sinh mùi. Không mặc định “tưới” trực tiếp lên vật nuôi, thức ăn hoặc nước uống.</p>`)+
C("6. Nguyên tắc phối trộn",`<ol>${p.mixing.map(x=>`<li>${x}</li>`).join("")}</ol>`,"good")+
C("7. Vôi rắc và Eco Clean – ưu/nhược điểm",`<div class="scroll"><table><tr><th>Tiêu chí</th><th>Vôi rắc</th><th>Eco Clean</th></tr>${p.lime.map(x=>`<tr><td><b>${x[0]}</b></td><td>${x[1]}</td><td>${x[2]}</td></tr>`).join("")}</table></div>`)+
C("⚠️ An toàn & giới hạn tư vấn",`<p>Không dùng Eco Clean để thay thế vệ sinh, thông gió, thu gom chất thải, sát trùng hoặc điều trị thú y. Với hầm phân/khu kín có khí nặng, cay mắt, khó thở: ưu tiên rời vùng nguy hiểm và thông gió theo quy trình an toàn.</p>`,"warn")}
function Sale(){return H("Kịch bản Sale New Eco Clean","Tình trạng trại trước – sản phẩm sau.")+`<div class="steps">${D.sale.map((x,i)=>`<div class="step"><i>${i+1}</i><div><h3>${x[0]}</h3><p>${x[1]}</p><blockquote>${x[2]}</blockquote></div></div>`).join("")}</div>`+C("Xử lý từ chối",`<details><summary>“Tôi rửa chuồng mỗi ngày rồi.”</summary><p>Rửa lấy chất bẩn ra nhưng mùi có thể còn ở rãnh, hầm, nền ẩm. Eco Clean là bước hỗ trợ sau vệ sinh.</p></details><details><summary>“Phun rồi hôm sau rửa thì sao?”</summary><p>Ưu tiên phun sau lần rửa chính, khi nền ráo tương đối, để tăng thời gian lưu.</p></details>`)}
function I(){return H("Phân tích chuyên sâu thành phần","Thành phần → cơ chế → lợi ích tư vấn → giới hạn phát ngôn.")+
`<div class="ingredient-grid">${D.ingredients.map(x=>C(x[0]+` <span class="badge">${x[1]}</span>`,`<p><b>Cơ chế/vai trò:</b> ${x[2]}</p><p><b>Lưu ý tư vấn:</b> ${x[3]}</p>`)).join("")}</div>`+
C("Lưu ý khi dùng cùng hóa chất sát khuẩn, thuốc tím…",`<div class="scroll"><table><tr><th>Nhóm sản phẩm</th><th>Rủi ro khi dùng chung</th><th>Cách xử lý an toàn</th></tr>${D.mixSafety.map(x=>`<tr><td><b>${x[0]}</b></td><td>${x[1]}</td><td>${x[2]}</td></tr>`).join("")}</table></div><div class="note"><b>Nguyên tắc nhớ nhanh cho Sale:</b> Eco Clean là chế phẩm có vi sinh → gặp chất sát khuẩn/oxy hóa mạnh thì <b>không pha chung</b>. Khi khách vừa sát trùng chuồng, hỏi chính xác tên hóa chất và thời điểm dùng; thời gian cách ly phải theo nhãn hóa chất hoặc xác nhận kỹ thuật, không tự đặt một số giờ cố định.</div>`,"warn")+C("Cơ chế phối hợp của công thức",`<div class="flow"><b>Chất thải hữu cơ / nguồn mùi</b><span>→</span><b>Bacillus + Lactobacillus hỗ trợ chuyển hóa môi trường</b><span>+</span><b>Yucca hỗ trợ kiểm soát mùi khai</b><span>→</span><b>Quản lý mùi bền hơn khi đi cùng vệ sinh + thông gió</b></div>`,"good")+
C("Sale tuyệt đối tránh nói quá",`<ul><li>Không nói “diệt sạch vi khuẩn gây bệnh”, “phòng bệnh đường ruột/hô hấp” nếu không có hồ sơ công bố hỗ trợ claim đó.</li><li>Không nói vi sinh “dính vào da/thức ăn giúp tiêu hóa” khi mục đích đăng ký/hướng dẫn là xử lý môi trường.</li><li>Không quy mọi mùi chuồng là NH₃/H₂S nếu chưa đo.</li><li>Không cam kết một lần phun giữ 10–15 ngày cho mọi trại; tải phân, ẩm và vệ sinh khác nhau.</li></ul>`,"warn")}
function Dict(){return H("Từ điển chăn nuôi 3 miền","Sale nghe đúng từ địa phương và hỏi lại đúng nghĩa.")+
tabs(Object.keys(D.dict),"region")+C(S.region,`<table><tr><th>Từ thường nghe</th><th>Sale hiểu / hỏi lại</th></tr>${D.dict[S.region].map(x=>`<tr><td><b>${x[0]}</b></td><td>${x[1]}</td></tr>`).join("")}</table>`)}
function tabs(xs,key){return `<div class="tabs">${xs.map(x=>`<button data-${key}="${x}" class="${S[key]===x?"on":""}">${key==="animal"?D.animals[x].i+" ":""}${x}</button>`).join("")}</div>`}
function A(){let a=D.animals[S.animal], hs=D.husbandry[S.animal]||[];
let visuals={
"Heo":["https://images.pexels.com/photos/4636976/pexels-photo-4636976.jpeg","Heo trong chuồng nuôi thực tế","Chuồng heo – khu nuôi, nền/rãnh và điểm tích tụ chất thải"],
"Gà":["https://cdn.insteading.com/wp-content/uploads/2019/12/14092381780_d67c65a119_h.jpg","Gà thịt trong chuồng nền thực tế","Chuồng gà nền/đệm lót – khu vực cần chú ý độ ẩm và ammonia"],
"Vịt / ngan":["https://images.pexels.com/photos/12741625/pexels-photo-12741625.jpeg","Đàn vịt tại trang trại","Khu nuôi vịt/ngan – nền, khu nước và điểm phân ướt"],
"Bò":["https://images.pexels.com/photos/10829420/pexels-photo-10829420.jpeg","Bò trong chuồng nuôi thực tế","Chuồng bò – khu nằm, lối đi và khu gom phân"],
"Dê / cừu":["https://images.pexels.com/photos/5953806/pexels-photo-5953806.jpeg","Dê trong chuồng nuôi thực tế","Chuồng dê/cừu – khu sàn/nền và khu thu gom phân"],
"Chim cút":["https://images.pexels.com/photos/4530408/pexels-photo-4530408.jpeg","Chim cút trong hệ thống lồng nuôi","Chuồng/lồng cút – khu lồng, máng và khu thu phân"]
};
let v=visuals[S.animal]||["","Vật nuôi","Mô hình chuồng trại"];
return H("Các loại vật nuôi & chuồng trại","Chọn vật nuôi để xem mô hình chuồng, chu kỳ nuôi, điểm phát sinh mùi và cách áp dụng Eco Clean.")+
tabs(Object.keys(D.husbandry),"animal")+
`<div class="real-farm-photo"><img src="${v[0]}" alt="${v[1]}" loading="lazy" referrerpolicy="no-referrer"><div class="photo-info"><b>${v[1]}</b><p>${v[2]}</p><small>Ảnh thực tế minh họa. Kiểu chuồng, mật độ và thiết bị có thể khác theo từng trại.</small></div></div>`+
`<div class="g2">${C(`${a.i} Vấn đề thường gặp`, `<ul>${a.pain.map(x=>`<li>${x}</li>`).join("")}</ul>`)}${C("Cách áp dụng Eco Clean",`<p>${a.use}</p>`,"good")}</div>`+
C("Các loại chuồng trại & chu kỳ nuôi",`<div class="scroll"><table><tr><th>Đối tượng</th><th>Loại chuồng thường gặp</th><th>Thời gian 1 lứa/chu kỳ</th><th>Nhịp/lứa trong năm</th><th>Điểm cần quan tâm</th></tr>${hs.map(x=>`<tr><td><b>${x[0]}</b></td><td>${x[1]}</td><td>${x[2]}</td><td>${x[3]}</td><td>${x[4]}</td></tr>`).join("")}</table></div><p class="note"><b>Lưu ý:</b> Chu kỳ và số lứa thực tế phụ thuộc giống, mô hình, vùng, thị trường và an toàn sinh học.</p>`)+
C("Câu hỏi Sale/CSKH cần hỏi",`<ol>${a.ask.map(x=>`<li>${x}</li>`).join("")}</ol>`)}
function Care(){
 const profiles={
 "Heo":{q:["Anh/chị đang nuôi heo thịt, heo nái hay heo con?","Hiện chuồng khoảng bao nhiêu con và diện tích khoảng bao nhiêu m²?","Mùi nặng nhất ở nền chuồng, rãnh thoát, hố phân hay hầm biogas?","Chuồng rửa mỗi ngày hay định kỳ? Sau khi rửa bao lâu thì mùi khai quay lại?"],spray:["Dọn bớt phân/chất thải đặc trước khi phun.","Phun sương ẩm đều nền chuồng, vách thấp, rãnh thoát và khu phân – nước tiểu.","Tập trung góc ẩm, khe nền và đường thoát phân; không cần làm đẫm toàn bộ chuồng.","Phun sau vệ sinh, khi nền không còn dòng nước chảy; ưu tiên sáng sớm hoặc chiều mát."]},
 "Gà":{q:["Anh/chị nuôi gà thịt, gà ta hay gà đẻ?","Chuồng dùng trấu/đệm lót hay nền trống?","Trấu có đang ẩm, bết hoặc mùi khai mạnh ở khu máng uống không?","Mật độ đàn và độ tuổi gà hiện tại khoảng bao nhiêu?"],spray:["Phun sương mịn, vừa đủ ẩm bề mặt; không làm đệm lót quá ướt.","Tập trung chỗ trấu ẩm, khu máng uống, góc chuồng và nơi phân tích tụ.","Nếu đệm lót quá ướt/bết, xử lý độ ẩm và chất thải trước.","Phun sáng sớm hoặc chiều mát, đảm bảo chuồng thông thoáng."]},
 "Vịt / ngan":{q:["Anh/chị nuôi vịt hay ngan, hiện đàn bao nhiêu con?","Chuồng là nền khô hay có khu nước/tắm?","Mùi tập trung ở nền, khu nước, rãnh thoát hay hố phân?","Nền có thường xuyên ướt và khó khô không?"],spray:["Thu gom chất thải và thoát bớt nước đọng trước.","Phun nền, rãnh thoát, khu phân và các điểm ẩm phát sinh mùi.","Không tự ý pha sản phẩm vào ao/nước uống của vật nuôi.","Ưu tiên xử lý sau vệ sinh để sản phẩm có thời gian lưu trên bề mặt."]},
 "Bò":{q:["Anh/chị nuôi bò thịt hay bò sữa?","Khu vực nào mùi nặng nhất: nền nằm, máng, đường gom phân hay hố chứa?","Phân được gom mấy lần/ngày?","Nền chuồng khô hay thường xuyên ẩm do nước tiểu/rửa chuồng?"],spray:["Gom lớp phân dày trước để sản phẩm tiếp xúc bề mặt.","Phun đều nền, đường gom phân, rãnh và khu vực lưu phân.","Vùng ô nhiễm nặng dùng liều khử mùi nặng theo dung tích bình.","Giữ thông gió và tránh phun ngay trước lúc xịt rửa."]},
 "Dê / cừu":{q:["Anh/chị nuôi dê/cừu thịt hay sinh sản?","Chuồng sàn cao hay nền đất/bê tông?","Phân tập trung dưới sàn hay gom về hố chứa?","Khu nào đang ẩm và có mùi rõ nhất?"],spray:["Chuồng sàn cao: tập trung khu phân phía dưới sàn và nơi gom chất thải.","Chuồng nền: phun sương ẩm đều các điểm phát sinh mùi.","Dọn lớp chất thải quá dày trước khi xử lý.","Giữ khu nằm của vật nuôi khô và thông thoáng."]},
 "Chim cút":{q:["Anh/chị nuôi cút thịt hay cút đẻ?","Phân nằm dưới dãy lồng hay có hệ thống thu gom riêng?","Bao lâu thu phân một lần?","Mùi khai tập trung ở dãy nào hoặc khu vực nào?"],spray:["Tập trung khu chứa phân dưới lồng, lối gom phân và góc ẩm.","Phun sương có kiểm soát, tránh làm tăng ẩm không cần thiết.","Nếu lớp phân quá dày, thu bớt trước rồi mới phun.","Kết hợp thông gió để giảm tích tụ mùi trong chuồng."]},
 "Hầm biogas / hố phân":{q:["Hầm/hố đang nhận phân từ loại vật nuôi nào?","Dung tích hoặc quy mô hố khoảng bao nhiêu?","Mùi nặng ở miệng hố, rãnh dẫn hay khu chứa?","Hiện trại có dùng sát khuẩn/hóa chất nào chảy xuống hố không?"],spray:["Cách trực tiếp đang áp dụng: 1 chai Eco Clean + 3–5L nước sạch, khuấy đều rồi chia/tạt xuống hố.","Hoặc nhân sinh khối theo hướng dẫn rồi chia dung dịch để tạt xuống hố.","Tạt từ vị trí an toàn, không xuống hầm/hố kín.","Đảm bảo thông thoáng vì hầm phân/biogas có thể tích tụ khí nguy hiểm."]}
 };
 let opts=Object.keys(profiles), animal=profiles[S.animal]?S.animal:"Heo", p=profiles[animal];
 let tanks=[2,3,5,10,16,18,20,25,30], L=+(S.careTank||20);
 return H("Kịch bản CSKH Eco Clean","Chọn vật nuôi và CALL 1 / CALL 2 / CALL 3 — nội dung sẽ thay đổi tương ứng theo lựa chọn.")+
 `<div class="flow-steps"><b>1. Vật nuôi</b><span>→</span><b>2. Loại bình</b><span>→</span><b>3. Liều pha</b><span>→</span><b>4. Câu hỏi</b><span>→</span><b>5. Cách phun</b><span>→</span><b>6. Lưu ý</b></div>`+
 C("1. Chọn loại vật nuôi / khu xử lý",`<div class="animal-tabs">${opts.map(x=>`<button data-careanimal="${x}" class="${animal===x?"on":""}">${x}</button>`).join("")}</div>`)+
 C("2. Loại bình khách đang dùng bao nhiêu lít?",`<label>DUNG TÍCH BÌNH</label><select id="careTank">${tanks.map(x=>`<option value="${x}" ${L===x?"selected":""}>${x}L${[16,18,20,25,30].includes(x)?" • bình điện/bình máy thường gặp":""}</option>`).join("")}<option value="custom" ${!tanks.includes(L)?"selected":""}>Dung tích khác</option></select><div id="careCustomWrap" style="display:${tanks.includes(L)?"none":"block"}"><label style="margin-top:8px">NHẬP DUNG TÍCH THỰC TẾ</label><input id="careCustom" type="number" min="1" max="200" value="${L}"></div><div class="note"><b>Bình điện:</b> hỏi dung tích thực tế của bình. Ví dụ bình điện 16L → chọn 16L; bình điện 20L → chọn 20L.</div>`)+
 C("3. Liều pha đúng theo bình khách",`<div id="careDose">${careDose(L,animal)}</div>`)+
 C(`4. Câu hỏi tương ứng — ${animal}`,`<div class="question-list">${p.q.map((x,i)=>`<div><b>${i+1}</b><span>${x}</span></div>`).join("")}</div>`)+
 C(`5. Cách phun / xử lý — ${animal}`,`<ol class="spray-list">${p.spray.map(x=>`<li>${x}</li>`).join("")}</ol>`)+
 C("6. Lưu ý khi dùng",`<div class="warn-grid"><div><b>Không pha chung sát khuẩn</b><p>Không pha chung một bình với Chlorine, thuốc tím (KMnO₄), Iodine, Nano bạc, vôi, chất sát khuẩn mạnh hoặc kháng sinh.</p></div><div><b>Tách thời điểm xử lý</b><p>Nếu trại vừa sát khuẩn, không phun Eco Clean đồng thời; theo khoảng cách thời gian/quy trình kỹ thuật công ty đã phê duyệt.</p></div><div><b>Vệ sinh trước – phun sau</b><p>Dọn bớt phân, chất thải và nước đọng. Tránh phun ngay trước khi rửa chuồng.</p></div><div><b>Đong đúng liều</b><p>1 nắp = 30ml. Bình nhỏ hoặc liều lẻ nên đong ml để chính xác.</p></div><div><b>Thời điểm</b><p>Ưu tiên sáng sớm hoặc chiều mát; lắc đều sản phẩm trước khi đong.</p></div><div><b>Quản lý tổng thể</b><p>Vẫn cần thu gom chất thải, kiểm soát độ ẩm và thông gió.</p></div></div>`)+
 C("7. Sườn kịch bản CSKH — CALL 1 / CALL 2 / CALL 3",`<div class="current-choice"><b>Đang chọn:</b> ${animal} • CALL ${S.careCall||1}</div>`+careCalls(animal))
}
function careCalls(animal){
 const n=S.careCall||1;
 const opts=n===1?["Đã nhận hàng","Chưa nhận hàng","Thiếu / hư hàng"]:n===2?["Chưa dùng","Đã dùng","Có cải thiện","Chưa cải thiện"]:["Hiệu quả tốt","Một phần","Chưa đánh giá","Tới cữ tiếp","Tái mua"];
 if(!opts.includes(S.careStatus))S.careStatus=opts[0];
 return `<div class="call-flow">
 <button data-carecall="1" class="${n===1?"on":""}"><b>CALL 1</b><small>Nhận hàng • hướng dẫn</small></button>
 <button data-carecall="2" class="${n===2?"on":""}"><b>CALL 2</b><small>Sử dụng • hiệu quả</small></button>
 <button data-carecall="3" class="${n===3?"on":""}"><b>CALL 3+</b><small>Duy trì • tái mua</small></button></div>
 ${careCallIntro(animal,n)}
 <h4 class="branch-title">Chọn tình trạng khách hàng</h4><div class="status-chips">${opts.map(x=>`<button data-carestatus="${x}" class="${S.careStatus===x?"sel":""}">${x}</button>`).join("")}</div>
 <div class="branch-result">${careStatusBody(animal,n,S.careStatus)}</div>`;
}
function careCallIntro(animal,n){
 if(n===1)return `<div class="call-panel compact"><h4>CALL 1 — SAU KHI KHÁCH NHẬN ĐƠN</h4><blockquote>“Eco Clean mình đã nhận được hàng chưa ạ? Em kiểm tra nhanh tình trạng đơn rồi hướng dẫn liều và cách phun đúng cho trại ${animal}.”</blockquote><div class="kpi"><b>KPI:</b> Xác nhận đơn hàng • xử lý thiếu/hư nếu có • hướng dẫn đúng bình/liều • kết nối Zalo.</div></div>`;
 if(n===2)return `<div class="call-panel compact"><h4>CALL 2 — SAU KHI KHÁCH CÓ THỜI GIAN SỬ DỤNG</h4><blockquote>“Eco Clean mình đã dùng chưa ạ? Sau khi phun, khu vực nào thay đổi rõ nhất và khu nào còn mùi?”</blockquote><div class="kpi"><b>KPI:</b> Xác định đã/chưa dùng • đánh giá trước–sau • kiểm tra cách dùng • đưa hướng xử lý tiếp theo.</div></div>`;
 return `<div class="call-panel compact"><h4>CALL 3+ — THEO DÕI HIỆU QUẢ & TÁI MUA</h4><blockquote>“Em cập nhật lại tình hình Eco Clean của trại mình. Hiệu quả hiện tại thế nào và lượng hàng còn đủ cho cữ tiếp theo không ạ?”</blockquote><div class="kpi"><b>KPI:</b> Chốt hiệu quả • cữ tiếp theo • tồn hàng • tái mua đúng nhu cầu.</div></div>`;
}
function careStatusBody(animal,n,status){
 const map={
 "Đã nhận hàng":`<h4>✅ Đã nhận hàng</h4><p><b>Cách xử lý:</b> Xác nhận khách nhận đủ số lượng, chai nguyên vẹn → hỏi loại ${animal}, dung tích bình và khu mùi nặng → hướng dẫn đúng số nắp/ml ở phần trên → nhắc cách phun và lưu ý không pha chung sát khuẩn.</p><p><b>Câu chốt:</b> “Anh/chị dùng đúng liều này giúp em, sau khi dùng em sẽ gọi lại hỏi khu nào cải thiện rõ nhất.”</p>`,
 "Chưa nhận hàng":`<h4>🚚 Chưa nhận hàng</h4><p><b>Cách xử lý:</b> Kiểm tra ngày đặt, tình trạng vận chuyển và thông tin nhận hàng. Chưa hướng khách đánh giá sản phẩm khi chưa nhận. Nếu đơn chậm bất thường, báo bộ phận phụ trách/leader xử lý và cập nhật lại cho khách.</p><p><b>Câu chốt:</b> “Em kiểm tra đơn ngay và cập nhật lại cho anh/chị. Khi hàng tới em hướng dẫn liều theo đúng bình mình đang dùng.”</p>`,
 "Thiếu / hư hàng":`<h4>📦 Thiếu / hư hàng</h4><p><b>Cách xử lý:</b> Xin ảnh/video kiện hàng, chai, tem và phần bị thiếu/hư → ghi nhận số lượng → báo leader/bộ phận xử lý theo chính sách công ty. Không tranh luận lỗi với khách và không yêu cầu khách dùng chai có dấu hiệu rò rỉ/hư hỏng.</p><p><b>Câu chốt:</b> “Anh/chị gửi em hình tình trạng hàng, em ghi nhận và chuyển xử lý ngay, sau đó em cập nhật phương án cho mình.”</p>`,
 "Chưa dùng":`<h4>⏳ Chưa dùng</h4><p><b>Cách xử lý:</b> Hỏi lý do chưa dùng: chưa tới lịch vệ sinh, chưa biết pha, bận, còn sản phẩm cũ… → gỡ đúng vướng mắc → nhắc lại dung tích bình, số nắp/ml và cách phun cho ${animal} → hẹn ngày dự kiến sử dụng.</p>`,
 "Đã dùng":`<h4>🧴 Đã dùng</h4><p><b>Cách xử lý:</b> Chưa vội hỏi “có hiệu quả không”. Trước tiên xác nhận: dùng ngày nào → bình bao nhiêu lít → bao nhiêu nắp/ml → phun khu nào → phun trước/sau vệ sinh → có sát khuẩn gần thời điểm đó không. Sau đó mới chuyển sang đánh giá cải thiện.</p>`,
 "Có cải thiện":`<h4>📈 Có cải thiện</h4><p><b>Cách xử lý:</b> Giúp khách nói rõ hiệu quả: khu nào giảm mùi, mức độ thay đổi, nền/khu phân/rãnh khác trước thế nào, hiệu quả giữ được bao lâu. Ghi nhận cách dùng đang phù hợp và hướng khách duy trì theo tình trạng thực tế.</p><p><b>Câu hỏi:</b> “Nếu so trước và sau khi phun, anh/chị thấy khu nào thay đổi rõ nhất?”</p>`,
 "Chưa cải thiện":`<h4>🔎 Chưa cải thiện</h4><p><b>Cách xử lý:</b> Rà lần lượt: đúng liều chưa → đúng dung tích bình chưa → độ phủ → nguồn phân/nước tiểu → nền quá ẩm → thời điểm rửa → sát khuẩn dùng gần đó → thông gió. Không tự tăng liều liên tục khi chưa rõ nguyên nhân. Nếu đã dùng đúng mà vẫn bất thường, xin ảnh/video và chuyển kỹ thuật.</p>`,
 "Hiệu quả tốt":`<h4>🌟 Hiệu quả tốt</h4><p><b>Cách xử lý:</b> Xác nhận khu vực đạt hiệu quả và thời gian duy trì → hỏi lượng hàng còn → tính cữ tiếp theo theo quy mô thực tế → nhắc duy trì trước khi mùi quay lại nặng.</p>`,
 "Một phần":`<h4>◐ Hiệu quả một phần</h4><p><b>Cách xử lý:</b> Tách rõ khu đã giảm mùi và khu chưa giảm. Giữ cách dùng ở khu hiệu quả; với khu chưa đạt, rà nguồn mùi, độ ẩm, chất thải, độ phủ và thông gió trước khi điều chỉnh.</p>`,
 "Chưa đánh giá":`<h4>📝 Chưa đánh giá được</h4><p><b>Cách xử lý:</b> Không ép khách kết luận. Chốt 2–3 tiêu chí dễ quan sát như mùi khai, khu phân/rãnh, độ ẩm nền và hẹn mốc gọi lại sau khi khách có đủ thời gian theo dõi.</p>`,
 "Tới cữ tiếp":`<h4>🔁 Tới cữ tiếp</h4><p><b>Cách xử lý:</b> Kiểm tra tình trạng mùi hiện tại và lượng Eco Clean còn. Nhắc lại đúng liều theo bình khách đang dùng; ưu tiên liều duy trì nếu môi trường đang ổn, chỉ dùng nhánh khử mùi nặng khi khu vực thực sự ô nhiễm nặng.</p>`,
 "Tái mua":`<h4>🛒 Tái mua</h4><p><b>Cách xử lý:</b> Hỏi lượng hàng còn, quy mô đàn/chuồng có thay đổi không và tần suất thực tế → tính lượng cần mua đủ cho các cữ tiếp theo, tránh bán dư → áp dụng chương trình bán hàng hiện hành nếu có.</p><p><b>Câu chốt:</b> “Em tính theo đúng quy mô và lịch dùng của trại để mình lấy vừa đủ, không phải ôm hàng.”</p>`};
 return map[status]||"";
}
function careDose(L,animal){
 L=Math.max(1,+L||20);
 if(animal==="Hầm biogas / hố phân")return `<div class="biogas-box"><b>Hầm biogas / hố phân không tính theo bình phun.</b><p><b>Dùng trực tiếp:</b> 1 chai Eco Clean 1L + 3–5L nước sạch → khuấy đều → chia/tạt xuống hố.</p><p><b>Hoặc:</b> nhân sinh khối rồi chia dung dịch tạt xuống hố.</p></div>`;
 let maintain=L/5, lo,hi;
 if(L===5){lo=4;hi=4}else{lo=L*6/20;hi=L*8/20}
 let mm=maintain*30,lm=lo*30,hm=hi*30;
 return `<div class="dose-choice"><div><span>DUY TRÌ</span><strong>${fmtCare(maintain)} nắp</strong><b>${Math.round(mm)}ml Eco Clean + ${fmtCare(L)}L nước</b></div><div class="heavy"><span>KHỬ MÙI NẶNG</span><strong>${fmtCare(lo)}${Math.abs(hi-lo)>.01?"–"+fmtCare(hi):""} nắp</strong><b>${Math.round(lm)}${Math.abs(hm-lm)>.01?"–"+Math.round(hm):""}ml Eco Clean + ${fmtCare(L)}L nước</b></div></div><div class="dose-tip">Quy ước 1 nắp = 30ml. Riêng mốc 5L theo hướng dẫn bạn cung cấp: duy trì 1 nắp; khử mùi nặng 4 nắp.</div>`;
}
function fmtCare(n){let x=Math.round(n*10)/10;return Number.isInteger(x)?x:String(x).replace(".",",")}

function call(a){if(S.call===1)return `<blockquote>“Eco Clean mình đã nhận đủ chưa ạ? Trại mình nuôi ${S.animal}, em hỏi nhanh cách vệ sinh và khu mùi nặng nhất để hướng dẫn phun đúng.”</blockquote><ol>${a.ask.map(x=>`<li>${x}</li>`).join("")}</ol><p><b>KPI:</b> nhận đủ • hiểu cách dùng • Zalo • xác định điểm mùi.</p>`;if(S.call===2)return `<blockquote>“Sau khi dùng Eco Clean, khu nào thay đổi rõ nhất? Mùi, nền và khu phân/rãnh so với trước thế nào?”</blockquote><ol><li>Ngày dùng?</li><li>Pha/phun thế nào?</li><li>Vệ sinh trước hay sau?</li><li>Khu nào chưa cải thiện?</li></ol><p><b>KPI:</b> dữ liệu trước–sau • đúng/sai cách dùng • lịch theo dõi.</p>`;return `<blockquote>“Em cập nhật hiệu quả các lần dùng. Nếu mùi đã ổn mình duy trì theo phát sinh thực tế; nếu chưa ổn em rà nguồn mùi trước khi đề xuất thêm.”</blockquote><ol><li>Hiệu quả giữ bao lâu?</li><li>Điểm mùi còn lại?</li><li>Hàng còn?</li><li>Quy mô có đổi?</li></ol><p><b>KPI:</b> chốt kết quả • kế hoạch duy trì • tái mua đúng nhu cầu.</p>`}
function outcome(a){if(!S.out)return"";let m={"Đã nhận đủ":"Chuyển hướng dẫn đúng vật nuôi và điểm mùi; chốt thời điểm phun sau vệ sinh.","Chưa nhận/thiếu":"Xác minh kiện/số lượng và báo xử lý; chưa đánh giá hiệu quả.","Chưa biết dùng":a.use,"Đã kết nối Zalo":"Gửi hướng dẫn ngắn và xin ảnh khu chuồng nếu cần.","Chưa dùng":"Hỏi lý do, hẹn thời điểm phù hợp; chưa dùng thì chưa đánh giá.","Đã dùng":"Ghi tỷ lệ pha, diện tích, cách phun, vệ sinh và khu xử lý.","Có hiệu quả":"Hỏi khu nào giảm mùi, giữ bao lâu; lập lịch duy trì.","Chưa hiệu quả":"Rà nguồn mùi → vệ sinh → ẩm → thông gió → tỷ lệ → độ phủ → thời điểm rửa. Đúng mà vẫn bất thường: chuyển kỹ thuật.","Mùi nặng hơn":"Không kết luận do sản phẩm. Kiểm tra tích phân, nền ướt, hầm/rãnh, thông gió. Có dấu hiệu khí độc/khó thở: ưu tiên an toàn.","Hiệu quả tốt":"Chốt tiêu chí cải thiện và lịch duy trì.","Một phần":"Tách khu đạt/chưa đạt; xử lý nguồn mùi còn lại trước khi tăng lượng.","Chưa đánh giá":"Chốt tiêu chí và ngày gọi lại.","Tái mua":"Tính theo diện tích, tần suất và tồn kho; không bán dư.","Cần kỹ thuật":"Thu ảnh/video, kiểu chuồng, quy mô, vệ sinh, tỷ lệ pha rồi chuyển kỹ thuật."};return `<div class="result"><b>💡 Xử lý:</b> ${m[S.out]}</div>`}


function FAQ(){
 let cats=["Tất cả",...new Set(D.faq.map(x=>x[1]))];
 return H("Các câu hỏi liên quan Eco Clean","Đầy đủ 16 câu hỏi & câu trả lời theo 3 ảnh gợi ý bạn cung cấp.")+
 `<div class="source-note"><b>📌 Bộ câu trả lời gốc từ tài liệu Sale:</b> Nội dung dưới đây được giữ theo 3 ảnh gợi ý để nhân viên tra cứu. Một số nội dung trong ảnh dùng liều/chương trình/claim cũ; khi tư vấn thực tế, ưu tiên thông tin kỹ thuật đã được phê duyệt ở các Module 1–3 và chính sách hiện hành.</div>`+
 `<div class="faq-tools"><input id="faqSearch" placeholder="🔎 Tìm: mùi hôi, dịch bệnh, ruồi, giá, sát trùng..."><div class="faq-cats">${cats.map(x=>`<button data-fcat="${x}" class="${(S.fcat||"Tất cả")===x?"on":""}">${x}</button>`).join("")}</div></div>`+
 `<div id="faqList">${faqList()}</div>`
}
function faqList(){
 let q=(S.fq||"").toLowerCase().trim(),cat=S.fcat||"Tất cả";
 let rows=D.faq.filter(x=>(cat==="Tất cả"||x[1]===cat)&&(!q||(x[2]+" "+x[3]+" "+x[1]).toLowerCase().includes(q)));
 return rows.length?rows.map(x=>`<details class="faq-item"><summary><span class="faq-no">${x[0]}</span><span><small>${x[1]}</small>${x[2]}</span></summary><div class="faq-answer"><b>TRẢ LỜI GỢI Ý:</b><p>${x[3].split("\n").join("<br>")}</p></div></details>`).join(""):`<div class="empty">Không tìm thấy câu hỏi phù hợp.</div>`;
}


function electricCalc(){
 let s=$("#electricTank"),r=$("#electricResult"),w=$("#customTankWrap"),ci=$("#customTank");if(!s||!r)return;
 let custom=s.value==="custom";if(w)w.style.display=custom?"block":"none";
 let L=custom?Math.max(1,+ci.value||1):+s.value;
 // Practical guide anchored to user-approved examples:
 // 20L: maintain 4 caps; heavy 6-8 caps. 5L exception: maintain 1 cap; heavy 4 caps.
 let dm, hlo, hhi;
 if(L===5){dm=1;hlo=4;hhi=4}
 else{dm=L/5;hlo=L*6/20;hhi=L*8/20}
 let dmml=dm*30, loml=hlo*30, himl=hhi*30;
 r.innerHTML=`<b>Bình điện ${fmtNum(L)}L</b><small><b>Duy trì:</b> ${fmtNum(dm)} nắp ≈ ${Math.round(dmml)}ml</small><small><b>Khử mùi nặng:</b> ${fmtNum(hlo)}${Math.abs(hhi-hlo)>.01?"–"+fmtNum(hhi):""} nắp ≈ ${Math.round(loml)}${Math.abs(himl-loml)>.01?"–"+Math.round(himl):""}ml</small>`;
 s.onchange=electricCalc;if(ci)ci.oninput=electricCalc;
}
function fmtNum(n){let x=Math.round(n*10)/10;return Number.isInteger(x)?x:String(x).replace(".",",")}

function bind(){
 $$("[data-carecall]").forEach(b=>b.onclick=()=>{S.careCall=Number(b.dataset.carecall);R()});
 $$("[data-carestatus]").forEach(b=>b.onclick=()=>{S.careStatus=b.dataset.carestatus;R()});

 $$("[data-careanimal]").forEach(b=>b.onclick=()=>{S.animal=b.dataset.careanimal;S.careCall=1;R()});
 let ctk=$("#careTank"),cci=$("#careCustom");
 if(ctk)ctk.onchange=()=>{if(ctk.value==="custom"){let w=$("#careCustomWrap");if(w)w.style.display="block";S.careTank=Math.max(1,+cci.value||20);let d=$("#careDose");if(d)d.innerHTML=careDose(S.careTank,S.animal)}else{S.careTank=+ctk.value;R()}};
 if(cci)cci.oninput=()=>{S.careTank=Math.max(1,+cci.value||1);let d=$("#careDose");if(d)d.innerHTML=careDose(S.careTank,S.animal)};
document.querySelectorAll("[data-region]").forEach(b=>b.onclick=()=>{S.region=b.dataset.region;R()});document.querySelectorAll("[data-animal]").forEach(b=>b.onclick=()=>{S.animal=b.dataset.animal;R()});document.querySelectorAll("[data-call]").forEach(b=>b.onclick=()=>{S.call=+b.dataset.call;S.out="";R()});document.querySelectorAll("[data-out]").forEach(b=>b.onclick=()=>{S.out=b.dataset.out;R()});let ca=$("#ca");if(ca)ca.onchange=e=>{S.animal=e.target.value;S.out="";R()};let fs=$("#faqSearch");if(fs){fs.value=S.fq||"";fs.oninput=e=>{S.fq=e.target.value;let el=$("#faqList");if(el)el.innerHTML=faqList()}};$$("[data-fcat]").forEach(b=>b.onclick=()=>{S.fcat=b.dataset.fcat;R()});electricCalc()}
function R(){nav();let x=M.find(y=>y[0]===S.m);$("#ttl").textContent=x[1];$("#sub").textContent=x[2];$("#app").innerHTML=({p:P,s:Sale,i:I,d:Dict,a:A,c:Care,q:FAQ}[S.m])();bind()}$("#menu").onclick=()=>document.body.classList.toggle("open");R();