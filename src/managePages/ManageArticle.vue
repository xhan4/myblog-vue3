<template>
  <div>
    <a-tabs
      v-model:activeKey="activeKey"
      type="editable-card"
      @edit="onEdit"
      hideAdd
    >
      <a-tab-pane
        v-for="pane in panes"
        :key="pane.key"
        :tab="pane.title"
        :closable="pane.closable"
      >
        <div v-if="pane.key === '1'">
          <div class="header">
            <a-button @click="add">新增</a-button>
          </div>
          <a-table :columns="columns" :data-source="data" bordered>
            <template #headerCell="{ column }">
              <template v-if="column.key === 'id'">
                <span>
                  <smile-outlined />
                  Name
                </span>
              </template>
            </template>

            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'name'">
                <a>
                  {{ record.name }}
                </a>
              </template>

              <template v-else-if="column.key === 'tags'">
                <span>
                  <a-tag
                    v-for="tag in record.tags"
                    :key="tag"
                    :color="
                      tag === 'loser'
                        ? 'volcano'
                        : tag.length > 5
                        ? 'geekblue'
                        : 'green'
                    "
                  >
                    {{ tag.toUpperCase() }}
                  </a-tag>
                </span>
              </template>

              <template v-else-if="column.key === 'action'">
                <span>
                  <a>Invite 一 {{ record.name }}</a>
                  <a-divider type="vertical" />
                  <a>Delete</a>
                  <a-divider type="vertical" />
                  <a class="ant-dropdown-link">
                    More actions
                    <down-outlined />
                  </a>
                </span>
              </template>
            </template>
          </a-table>
        </div>
        <div v-else>
          <component :is="pane.content"/>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import AddArticle from './AddArticle.vue';
const columns = [
  {
    title: "ID",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "标题",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "类型",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "标签",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "创建时间",
    key: "createTime",
    dataIndex: "createTime",
  },
  {
    title: "更新时间",
    key: "updateTime",
    dataIndex: "updateTime",
  },
  {
    title: "操作",
    key: "action",
    dataIndex: "action",
  },
];

const data = [
  {
    key: "1",
    title: "John Brown",
    type: 32,
    tags: ["nice", "developer"],
    createTime: "2022-02-13",
    updateTime: "",
  },
];
export default defineComponent({
  components: {
    SmileOutlined,
    DownOutlined,
  },

  setup() {
    const panes = ref([
      {
        title: "文章列表",
        content: "Content of Tab 1",
        key: "1",
        closable: false,
      },
    ]);
    const activeKey = ref(panes.value[0].key);
    const newTabIndex = ref(0);

    const add = () => {
      activeKey.value = `newTab${newTabIndex.value++}`;
      panes.value.push({
        title: `新增文章`,
        content: <AddArticle/>,
        key: activeKey.value,
      });
    };

    const remove = (targetKey) => {
      let lastIndex = 0;
      panes.value.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      panes.value = panes.value.filter((pane) => pane.key !== targetKey);

      if (panes.value.length && activeKey.value === targetKey) {
        if (lastIndex >= 0) {
          activeKey.value = panes.value[lastIndex].key;
        } else {
          activeKey.value = panes.value[0].key;
        }
      }
    };

    const onEdit = (targetKey) => {
      remove(targetKey);
    };
    return {
      data,
      columns,
      panes,
      activeKey,
      onEdit,
      add,
    };
  },
});
</script>

<style scoped>
.header {
  padding: 0px 30px 15px;
  display: flex;
  justify-content: flex-end;
}
</style>