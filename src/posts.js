import React from 'react';
import { List, Datagrid, ReferenceField, TextField, DateField, EmailField, UrlField, NumberField, Filter, TextInput, EditButton } from 'react-admin';
import { Create, Edit, SimpleForm, ReferenceInput, DisabledInput, LongTextInput, NumberInput, SelectInput } from 'react-admin'

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostList = props => (
    <List {...props} >
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="user"><TextField source="name" /></ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
)

export const PostEdit = props => (
    <Edit {...props} title={<PostTitle/>}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="user"><SelectInput optionText="name" /></ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="user">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);