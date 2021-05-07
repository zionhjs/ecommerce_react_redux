/**
 * Created by Andste on 2018/11/23.
 */
import React from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { navigate } from '../../navigator/NavigationService'
import { colors } from '../../../config'
import { Screen } from '../../utils'

const icon_all = 'data:image/png;base64,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'
const icon_shop = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEUxNkE1MkY3Mzc4MTFFN0FCMkZCODA3MzExODVBRjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEUxNkE1MkU3Mzc4MTFFN0FCMkZCODA3MzExODVBRjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVFOUQzODg3NzM2RDExRTdBQjJGQjgwNzMxMTg1QUY1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVFOUQzODg4NzM2RDExRTdBQjJGQjgwNzMxMTg1QUY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VAqWAQAACdhJREFUeNrsWXuMFVcZ/86Zx5190X3cXSjI0/IoJQsauiAP6WJI06ZtFCQmxKbESGJNiMU0SkyklT+0xGgsSY1NTQ2hVtJgZUsoUmMpa6lAwXZtC+VVLOyLLuzd17137sycc/ydmdnlrrt32QX+UMNkT+6ZmXO+8zvf4/d9Z5Yppeh/6WK3Ad8G/P8EeMOGJ4YdFASCMGyaYupRqdRqRjQV80y8utHdMlwepp/lzNjFib1smLKjuJjTcPrbvn37QN/MfyGEGDSQc64l6+5coeQzkHY/+vatsEmsqCqhxHxJ7IsmY5tx33a9eYMAJxIJ+s8NQLANzW5SJB9ixIFencIm3sI+ejDEuDGwTChSNejVw0bTYLV1eNCCVz8aE+CtWzcPevnr53fQhx+c/IbjJB5kFKr6EGP8KcbUe3o/2rQ3qmA0C7NXQsRWRuqewFdf7emhtwDpjZE8bRDg6uokDda4PSkQYj26E6VUfVWVJTsrK0oPdXf10dVUH8TyMbqxNhDGl9mUMCXZnrfH9dTsnEc/hfFmY41vY8TbGJcpJIGPJF4GYgMELIkX251IWHtyOZ/6+rKhf99wpMORfCdBImFJg9EfYbz9IRYm6pXKfdNxFE2eXEpTppSGvwU1vG3btoG+67G65ub2rxcVOQ5AnwO8Xfi96nkBeX5AjBsPY9hGtMox4m2BUX6Rdt3G+uVfpvqF9549drzp96/s3rPYSThJRWI9IuWA45ifstggBQGfOX2638HMdIY2ctOeY5kGuM/cyTg/lEploYyADMMgqWgS5K3EA2O0XA7f17LvQnenCAJKJpM0ddpU1dp2eR8JuRTPH1fEFiLUvwuRP9RIRgQszaJIsFRfA2GsUpoFFDUiql8FLtfzcnAFaJeF7rAH7Z+a5kZLYzFFZtHO6b6UMlpXyi7c70JbgcdzPc9f09KW2svJfHvEoPOj+dVQojZ1DQC7RQ5/wTLVx0oFIU/4PkMTZHCrnRtGuy8CohE0rIHCGjS+ehylsx4FnhuumjAcOnz4KF1oOkOdXV1UWlJyDH72O1+Jn0uhpqfT3hMGUyfiDQ4P2FLMElJ9C2ssCkOa0W7TpDcsC2jJBy8nAbqSTEQ4Z2nw2lVYI0xbIVfku0bUZ1QDoJZlUnGRTVnfJw4ytLFJS3K6cukitWbOAadFRU7CDaRsgGs8AIEroZuvMC7XmKb5h5hChwKGtyZB4o9iKRsgLmHZ3wLJZxqOHySh2Yma7EKGQBIloa6UaBkQ3q2NrSKTY01sCJEzvvoOKi8vxuZYqGVsolJbzZAyYyhBNnKmbYwPFQHHQGzwTyyVfi4I2uokyXKp2OMG5wfwsmNYWvOlAq2o6VGAUAPae66vqDcLZvDGYcWSULDGFUixzPf9XUCiqeWumGXDZjAWaj3retR+uZua21LU1p6q89xguwjYi5kszc/kGKW6cpTOGABag/FJzKsRJq/4O0QcZJGV5uV8797CQafkF/qDiLPEnxFoPQL+KjDbNlPQXHfIIZZpoZ9eFAj5EGe8C1s4rAMpjw5CqunqzuTnlVWI1XWkOFOc7/NyXtOKFSvISpTRmwffJTthaxNhbtDBDL5fCQnaVJYUwSzMfX1YDcfpN/JBLrIS0VdRUUTFjkWZbCdNnMhpwp2cMl6zJVVvJY/YwkGbFTFAvy/HwvGMG3AfZAfG2SxdHOo/uEtSM8T82nlUWzuDetMXoZAuKivrhXukEC+UGUjhmkcLZTr4XrOuJiOqCRYLkbNKShiZlqSc5yN1j6eqZDX6arKUbEE8DYlF1QFuBQvjdGg2RtNuNq9/PYCtlUqUZ90s5ZCXwfOUsGwqKy4hJWkcUvSSeC4cm18qCLi6quwgAuozHeGIicdIsgdDM8UwtBKhoFIm2Xpw85IBVyJajClPFsh6k6GmLfidk8cgqxADj9mOzVFYDTBKbKK1ePBIPPQsLPN+QR+uLC/9oLfXRRYSm4FM+87T3d3Z2pwnTtiW1dPcfHkS6uLlhmmsxbLl2nRwhT4sWIOo3ggH0DTyZph+I9mTAeABtEei6oy1AlEFAE2ybXvTsaP/+Bxkves4zmXX9ZOg1DqMW402QfMvtPkbmP1iQcBwCYl9PgdGKsOev4NHC1Ld6QUA9YlpGd2XmtunQOFVJlIzjI9sRc+qUMH0fbTPI0Wsx/M12MynsIyFd9NJ19ORKbWmfgUHvhMB9b2EZU09cuTEk7BlR1Gx05ZxvRqVzU3QdAjhKbRnIXkXQKmCgOMLVT97GlTbDn96GALm49kMhRtoQ7+/YJrshMmNlwKhGmBabcsWmG6dkmohAMzQ/qpiesCmPgaXvgMK2oGdNYamN602+NzqhGMv1KUr5lWH7saoHWn/BOPmXsX9FzHHHzE155WMKdR6P4O6/4L+l6ClaqxjKh29kn2UsPghYO/0M6FPw52pQXFqZIrdh9t7oN1KvJB4dwXWabK4cTBQwtWbZrqmsK0dTEC2lPdh8izsLYEXHuScgVv9jTP7oq88XdOMXMD39mbiImUgwI9jyvGh9cGw5UMK7U9xG3K8GCKAVCt+X6bw3Ii8ierNBAUmbH0v4fCAZlwHcEdHT5hSDR7xaQhc0d2aULOuez7wgxw0TFJwJA+GmtnAqcQiNepTh7q2W46ltc2QhGCJEuWLmZbJ++4YZ5xTYRVnDXsAGwSYxUDzltcp9ycAWj5n9swf11RXHdWAbWgByqDW9k46ffos1h7lWVSD5IZeiBQCF0ERFU6etwyrbhFCncpmxA+wfueoznRiqKLqoI2lrutOvH9V/SvLli46mv/y5KnTtOWpZ6hI19EjKBkpP3I1vTHdcI/oz0vjciHUvMQPVFVXj68TTOOoAA9jAU1JSmsBhc6gJJPOZKip6UOUmkY0Lw6QiP5V3plTUdD/vQPlpRJ+nIHy3ETilBf5nz7XJkZ9zC9wHA9dzravDe3rS9PuV/fSa6+9TqWlpWM7gMqoxrn2RYNdN0bHAjjMywaKl9bWLnnhQieYKEuH32mkhob9KFbGBjbv+xg0rQui/iWUVPmVx2gBs6FDXe3a+ovQvn1Hig7sP0++aIGJO24YbD5ojlOHLpeAtlgzDZYXeJ4ZNWA+dHPncYLt1TwpRMdyKTsakX5bOTfpFlxQq+IAOpeiI5nWWA9n1r9GDdg0h3wcOalANaCbudD+WqhlJjLRRzHzs5sELOPDQi3k3R25bgL1RkXLqD9VDXOlofcXIBslIiopRQuAdcFNQx0aX7og+SvU9fyYPgYWkHkApuoDU22ChhcDrCFvgXrz+CHA8eYAPPmX2qI3Dzi6DsMJ3i92jFJhyuI+32f8JiFDt6zE4IIJnnFdHSeDvz/c/h/HbcC3Af+XXP8WYADyVaCUKIhCOAAAAABJRU5ErkJggg=='

export default function ({ data }) {
  return (
    <View style={ styles.container }>
      <View style={ styles.shop_view }>
        <Image style={ styles.shop_logo } source={ { uri: data.shop_logo } }/>
        <Text>{ data.shop_name }</Text>
      </View>
      <View style={ styles.shop_info }>
        <TouchableOpacity style={ styles.shop_info_item } onPress={ () => {
          navigate('Shop', { id: data['shop_id'] })
        } }>
          <Text>{ data['shop_collect'] }</Text>
          <Text>关注人数</Text>
        </TouchableOpacity>
        <View style={ styles.place }/>
        <TouchableOpacity style={ styles.shop_info_item } onPress={ () => {
          navigate('ShopGoods', { shop_id: data['shop_id'] })
        } }>
          <Text>{ data['goods_num'] }</Text>
          <Text>全部商品</Text>
        </TouchableOpacity>
        <View style={ styles.place }/>
        <TouchableOpacity style={ styles.shop_info_item } onPress={ () => {
          navigate('Shop', { id: data['shop_id'] })
        } }>
          <Text>{ data['shop_credit'] }</Text>
          <Text>店铺评分</Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.shop_btns }>
        <TouchableOpacity
          style={ styles.shop_btn }
          onPress={ () => {
            navigate('ShopGoods', { shop_id: data['shop_id'] })
          } }>
          <Image style={ styles.shop_btn_icon } source={ { uri: icon_all } }/>
          <Text>全部商品</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.shop_btn }
          onPress={ () => {
            navigate('Shop', { id: data['shop_id'] })
          } }
        >
          <Image style={ styles.shop_btn_icon } source={ { uri: icon_shop } }/>
          <Text>进入店铺</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    marginTop: 10,
    marginBottom: 10
  },
  shop_view: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  shop_logo: {
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: colors.cell_line_backgroud,
    backgroundColor: '#FFF',
    marginRight: 10
  },
  shop_info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  shop_info_item: {
    alignItems: 'center'
  },
  place: {
    width: Screen.onePixel,
    height: 30,
    backgroundColor: colors.cell_line_backgroud
  },
  shop_btns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  shop_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    padding: 10,
    borderWidth: Screen.onePixel,
    borderColor: colors.cell_line_backgroud,
    borderRadius: 3
  },
  shop_btn_icon: {
    width: 16,
    height: 16,
    marginRight: 5
  }
})
