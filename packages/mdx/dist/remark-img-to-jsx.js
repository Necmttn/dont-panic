"use strict";
exports.__esModule = true;
exports.remarkImgToJsx = void 0;
function remarkImgToJsx() {
    // return (tree: Node) => {
    //   visit(
    //     tree,
    //     // only visit p tags that contain an img element
    //     (node: Parent): (node is Parent => 
    //       node.type === 'paragraph' && node.children.some((n) => n.type === 'image')) as Test,
    //     (node: Parent) => {
    //       const imageNode = node.children.find((n) => n.type === 'image') as ImageNode
    //       // only local files
    //       if (fs.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
    //         const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`)
    //         // Convert original node to next/image
    //         ;(imageNode.type = 'mdxJsxFlowElement'),
    //           (imageNode.name = 'Image'),
    //           (imageNode.attributes = [
    //             { type: 'mdxJsxAttribute', name: 'alt', value: imageNode.alt },
    //             { type: 'mdxJsxAttribute', name: 'src', value: imageNode.url },
    //             { type: 'mdxJsxAttribute', name: 'width', value: dimensions.width },
    //             { type: 'mdxJsxAttribute', name: 'height', value: dimensions.height },
    //           ])
    //         // Change node type from p to div to avoid nesting error
    //         node.type = 'div'
    //         node.children = [imageNode]
    //       }
    //     }
    //   )
    // }
}
exports.remarkImgToJsx = remarkImgToJsx;
