package com.usthe.bootshiro.domain.vo;


import java.util.ArrayList;
import java.util.List;

/* *
 * @Author tomsun28
 * @Description  tree 抽象节点 树可继承这个节点
 * @Date 16:47 2018/3/20
 */
public abstract class TreeNode {

    protected Integer id;
    protected Integer parentId;
    protected List<TreeNode> children = new ArrayList<>();

    public void addChilren(TreeNode node) {
        this.children.add(node);
    }

    public List<TreeNode> getChildren() {
        return children;
    }

    public void setChildren(List<TreeNode> children) {
        this.children = children;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }
}
