// # Bài 1
// Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter

// Yêu cầu chi tiết:

// Hàm return về giá trị
// Ép ràng buộc kiểu dữ liệu là số
// Nếu dữ liệu truyền vào không hợp lệ, trả về thông báo lỗi
console.log("Bài 1");
function getSum(...args) {
  var sum = 0;
  for (let i = 0; i < args.length; i++) {
    if (
      typeof args[i] !== "number" ||
      args[i] === "null" ||
      isNaN(args[i]) ||
      args[i] === Infinity
    ) {
      return "Không hợp lệ";
    }
    sum += args[i];
  }
  return sum;
}

console.log(getSum(0, 2, 3, 4, 5, NaN));

// # Bài 2
// Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị
// Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ
console.log("Bài 2");
Object.prototype.getCurrency = function (currency) {
  // var value = parseFloat(this);
  var value = +this;
  if (isNaN(value) || value === Infinity) {
    return "Dữ liệu không hợp lệ";
  }
  var fixValue = value.toLocaleString("en-US");
  return fixValue + " " + currency;
};
var price = NaN;
console.log(price.getCurrency("đ"));
var price = "a12";
console.log(price.getCurrency("đ"));
var price = 120000000.12;
console.log(price.getCurrency("$"));

// # Bài 3
// Chuyển đổi mảng 1 chiều thành dạng lồng (nested)
console.log("Bài 3");

var data = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];
// var nestedCategories = [...data];
function buildTree(data, parentId = 0) {
  var result = [];
  data.forEach((item) => {
    if (item.parent === parentId) {
      result[result.length] = { ...item };
      if (buildTree(data, item.id).length !== 0) {
        result[result.length - 1] = {
          ...result[result.length - 1],
          children: buildTree(data, item.id),
        };
      }
    }
  });
  return result;
}
console.log(buildTree(data, 0));

// # Bài 4
// Viết lại vòng lặp reduce() trong Array bằng cách sử dụng Prototype trong Javascript
// Lưu ý: Đặt tên là reduce2()

console.log("Bài 4");
Array.prototype.reduce2 = function (callback, initialValue) {
  let result = initialValue !== undefined ? initialValue : this[0];

  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }

  return result;
};
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.reduce2((prev, current) => {
  return prev * current;
});
console.log(result);
