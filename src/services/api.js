export async function getUsers() {
  try {
    const response = await fetch('http://192.168.2.6:3000/users');
    const data = await response.json();
    return data; 
  } catch (err) {
    console.error('Lỗi khi gọi API:', err);
    return [];
  }
}
