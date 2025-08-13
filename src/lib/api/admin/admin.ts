import howl from "@/lib/howl";


export const getUsersApi = async(page:string|number,search:string|null,token:string) => {
  return await howl({link:`/admin/get-users?per_page=10&page=${page}${search?`&search=${search}`:""}`,token})
};
export const viewUserApi = async(id:string,token:string) => {
  return await howl({link:`/admin/view-user/${id}`,token})
};
export const deleteUserApi = async(id:string,token:string) => {
  return await howl({link:`/admin/delete-user/${id}`,method:"delete",token})
};