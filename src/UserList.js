import React from 'react';
import { List, Datagrid, TextField, DateField, EmailField, UrlField, NumberField, Filter, TextInput } from 'react-admin';
import MyUrlField from './MyUrlField'

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="name" alwaysOn />
    </Filter>
);

const UserList = props => (
    <List {...props} filters={<UserFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="username" label="登录名" />
            <TextField source="name" label="姓名" />
            <EmailField source="email" label="电子邮件" />
            <TextField source="role" label="角色" />
            <TextField source="phone" label="电话" />
            <MyUrlField source="website" label="网站" />
            <TextField source="company.name" label="公司" />
        </Datagrid>
    </List>
)

export default UserList