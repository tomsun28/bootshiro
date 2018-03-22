package com.usthe.bootshiro.util;

import com.usthe.bootshiro.domain.vo.TreeNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

/* *
 * @Author tomsun28
 * @Description 树结构相关工具类
 * @Date 16:55 2018/3/20
 */
public class TreeUtil {

    private static final Logger LOGGER = LoggerFactory.getLogger(TreeUtil.class);

    /* *
     * @Description 用双重循环建树
     * @Param [treeNodes树节点列表, root根标志]
     * @Return java.util.List<T>
     */
    public static <T extends TreeNode> List<T> buildTreeBy2Loop(List<T> treeNodes, Object root) {
        List<T> trees = new ArrayList<>();
        for (T node : treeNodes) {
            if (root.equals(node.getParentId())) {
                trees.add(node);
            }

            for (T treeNode : treeNodes) {
                if (node.getId().equals(treeNode.getParentId())) {
                    if (node.getChildren()==null) {
                        node.setChildren(new ArrayList<>());
                    }
                    node.addChilren(treeNode);
                }
            }
        }
        return trees;
    }


    /* *
     * @Description 递归建树
     * @Param [treeNodes, root]
     * @Return java.util.List<T>
     */
    public static <T extends TreeNode> List<T> buildTreeByRecursive(List<T> treeNodes,Object root) {
        List<T> trees = new ArrayList<>();
        for (T node : treeNodes) {
            if (root.equals(node.getParentId())) {
                trees.add(findChildren(node,treeNodes));
            }
        }
        return trees;
    }

    /* *
     * @Description 递归查找子节点
     * @Param [treeNode, treeNodes]
     * @Return T
     */
    private static <T extends TreeNode> T findChildren(T treeNode, List<T> treeNodes) {
        for (T it : treeNodes) {
            if (treeNode.getId().equals(it.getParentId())) {
                if (treeNode.getChildren() == null) {
                    treeNode.setChildren(new ArrayList<>());
                }
                treeNode.addChilren(findChildren(it, treeNodes));
            }
        }
        return treeNode;
    }



}
