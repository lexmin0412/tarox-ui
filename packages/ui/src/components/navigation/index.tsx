import React, { useMemo } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Block } from '@tarojs/components'
import { useNavigationBarInfo } from './../../utils/hooks'
import Router from './../../utils/router'

const icon_back = `data:image/svg+xml;base64,PHN2ZyB0PSIxNjQzMDA5Mjk5NjIwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc0OTAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNzAwLjM3MTIyOCAzOTQuNTI1NDcyIDE3NC4wMjg1NjkgMzk0LjUyNTQ3MmwyNTUuOTUyNDE2LTIyNy41MDY1NTFjMTIuMzg5MTY4LTExLjAxMTc5OCAxMy41MDU1OTUtMjkuOTgwODI1IDIuNDkyNzc0LTQyLjM2OTk5My0xMS4wMTE3OTgtMTIuMzg2MDk4LTI5Ljk3Nzc1NS0xMy41MDY2MTktNDIuMzY3OTQ3LTIuNDkyNzc0TDc2LjQyNTYyMyA0MDAuOTc1MzcxYy02Ljk2MDUyOSA1LjQ5NjE3OC0xMS40MzQ0MjMgMTQuMDAzOTQ1LTExLjQzNDQyMyAyMy41NjE2MjUgMCAwLjAxMzMwMyAwLjAwMTAyMyAwLjAyNjYwNiAwLjAwMTAyMyAwLjAzOTkwOSAwIDAuMDEyMjgtMC4wMDEwMjMgMC4wMjU1ODMtMC4wMDEwMjMgMC4wMzc4NjIgMCAwLjQ3Mzc5MSAwLjAxNTM1IDAuOTQ2NTU4IDAuMDM3ODYyIDEuNDE4MzAyIDAuMDAxMDIzIDAuMDE2MzczIDAuMDAxMDIzIDAuMDMyNzQ2IDAuMDAxMDIzIDAuMDQ5MTE5IDAuMzkyOTUgOC4wMzA5MDcgMy45OTI5NDEgMTUuNTk1MTg2IDEwLjAzNDU0MSAyMC45NjI0MjdsMzE1LjA0MDE2MyAyODAuMDI4NzY0YzUuNzE3MjEyIDUuMDgzNzg1IDEyLjgzNTMzIDcuNTgwNjUyIDE5LjkyNTgxOCA3LjU4MDY1MiA4LjI3NDQ1NCAwIDE2LjUxNDExNS0zLjQwMzUxNiAyMi40NDIxMjgtMTAuMDc0NDUgMTEuMDExNzk4LTEyLjM4NzEyMiA5Ljg5NjM5NC0zMS4zNTcxNzItMi40OTI3NzQtNDIuMzY3OTQ3bC0yNTYuMTI4NDI1LTIyNy42NjUxNjMgNTI2LjUxODY2OCAwYzEwOS4yMTk1MTcgMCAxOTguMDc1MjQxIDg4Ljg1NTcyNCAxOTguMDc1MjQxIDE5OC4wNzUyNDFzLTg4Ljg1NTcyNCAxOTguMDc1MjQxLTE5OC4wNzUyNDEgMTk4LjA3NTI0MUwzNTQuMzI0ODg4IDg1MC42OTY5NTVjLTE2LjU3NDQ5IDAtMzAuMDExNTI0IDEzLjQzNzAzNC0zMC4wMTE1MjQgMzAuMDExNTI0czEzLjQzNzAzNCAzMC4wMTE1MjQgMzAuMDExNTI0IDMwLjAxMTUyNGwzNDYuMDQ2MzQxIDBjMTQyLjMxNjMxIDAgMjU4LjA5ODI4OS0xMTUuNzgzMDAzIDI1OC4wOTgyODktMjU4LjA5ODI4OVM4NDIuNjg2NTE1IDM5NC41MjU0NzIgNzAwLjM3MTIyOCAzOTQuNTI1NDcyeiIgZmlsbD0iI2ZmZiIgcC1pZD0iNzQ5MSI+PC9wYXRoPjwvc3ZnPgo=`
const icon_home = `data:image/svg+xml;base64,PHN2ZyB0PSIxNjQzMDA5MzI4MzU4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjgyODUiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNDY3LjM4NzczMyA5Ni43NjhMMTQyLjU3NDkzMyAzODMuMzE3MzMzYTY4LjI2NjY2NyA2OC4yNjY2NjcgMCAwIDAtMjMuMTA4MjY2IDUxLjJWODg3LjQ2NjY2N2E2OC4yNjY2NjcgNjguMjY2NjY3IDAgMCAwIDY4LjI2NjY2NiA2OC4yNjY2NjZoNjQ4LjUzMzMzNGE2OC4yNjY2NjcgNjguMjY2NjY3IDAgMCAwIDY4LjI2NjY2Ni02OC4yNjY2NjZWNDM0LjQ2NjEzM2E2OC4yNjY2NjcgNjguMjY2NjY3IDAgMCAwLTIzLjAyMjkzMy01MS4xMTQ2NjZMNTU3Ljc4OTg2NyA5Ni44MzYyNjdhNjguMjY2NjY3IDY4LjI2NjY2NyAwIDAgMC05MC40MDIxMzQtMC4wODUzMzR6TTE4Ny43MzMzMzMgNDM0LjUxNzMzM0w1MTIuNTQ2MTMzIDE0Ny45MzM4NjcgODM2LjI2NjY2NyA0MzQuNDY2MTMzVjg4Ny40NjY2NjdIMTg3LjczMzMzM1Y0MzQuNTE3MzMzeiIgZmlsbD0iI2ZmZiIgcC1pZD0iODI4NiI+PC9wYXRoPjxwYXRoIGQ9Ik01NDYuMTMzMzMzIDU5Ny4zMzMzMzN2MjIxLjg2NjY2N2gtNjguMjY2NjY2VjU5Ny4zMzMzMzNhMzQuMTMzMzMzIDM0LjEzMzMzMyAwIDEgMSA2OC4yNjY2NjYgMHoiIGZpbGw9IiNmZmYiIHAtaWQ9IjgyODciPjwvcGF0aD48L3N2Zz4K`

type NavigationHeaderProps = {
	title?: string
  /**
   * 是否受控 默认false 如果为true则图标默认不展示
   */
  controlled?: boolean
  /**
   * 返回按钮是否可见 当controlled为true时生效
   */
  backVisible?: boolean
  /**
   * 首页按钮是否可见 当controlled为true时生效
   */
  homeVisible?: boolean
  /**
   * 返回按钮点击事件 当controlled为true时生效
   */
  onBackClick?: () => void
  /**
   * 首页按钮点击时间 当controlled为true时生效
   */
  onHomeClick?: () => void
}

export const XNavigation: React.FC<NavigationHeaderProps> = (props): JSX.Element => {
	const {
    title = '页面标题',
    controlled = false,
    backVisible = true,
    homeVisible = true,
    onBackClick,
    onHomeClick
  } = props

	const {
		statusBarHeight,
		navigationBarHeight,
		navigationContentHeight,
		menuButtonHeight,
		navigationPaddding,
		menuButtonWidth,
	} = useNavigationBarInfo()

	const handleBack = () => {
    if ( !controlled ) {
		  Router.navigateBack()
    } else {
      if ( onBackClick ) {
        onBackClick()
      }
    }
	}

	const handleBackToHome = () => {
    if ( !controlled ) {
		  Router.backToHome()
    } else {
      if ( onHomeClick ) {
        onHomeClick()
      }
    }
	}

  const visibleIconNum = useMemo(()=>{
    const backNum = backVisible ? 1 : 0
    const homeNum = homeVisible ? 1 : 0
    return backNum + homeNum
  }, [])

  const iconGroupStyle = useMemo(()=>{
    if ( visibleIconNum === 1 ) {
      return {
        width: `${menuButtonHeight}px`,
        borderRadius: `${menuButtonHeight / 2}px`
      }
    } else if ( visibleIconNum === 2 ) {
      return {
        width: Taro.pxTransform(160),
        borderRadius: `${menuButtonHeight / 2}px`
      }
    }
  }, [visibleIconNum])

	return (
		<View
			className='nav-header'
			style={{
				height: navigationBarHeight,
				padding: `0 ${navigationPaddding}px`,
			}}
		>
			<View
				className='nav-header-status-placeholder'
				style={{
					height: statusBarHeight,
				}}
			/>
			<View
				className='nav-header-content'
				style={{
					height: `${navigationContentHeight}px`,
				}}
			>
				<View
					className='nav-header-content-left'
					style={{
						width: menuButtonWidth,
					}}
				>
          {
            visibleIconNum > 0 ?
              <View
                className={`nav-header-content-left-icon-group ${visibleIconNum === 1 ? 'single' : ''}`}
                style={{
                  ...iconGroupStyle,
                  height: `${menuButtonHeight}px`,
                }}
              >
                {
                  backVisible &&
                  <Image
                    src={icon_back}
                    className='nav-header-content-left-icon'
                    onClick={handleBack}
                  />
                }
                {
                  homeVisible && <Block>
                    {
                      backVisible &&
                      <View className='nav-header-content-left-icon-divider' />
                    }
                    <Image
                      src={icon_home}
                      className='nav-header-content-left-icon'
                      onClick={handleBackToHome}
                    />
                  </Block>
                }
              </View>
              :null
          }
				</View>
				<View className='nav-header-content-center'>{title || '页面标题'}</View>
				<View
					className='nav-header-content-right'
					style={{
						width: menuButtonWidth,
					}}
				/>
			</View>
		</View>
	)
}

export default XNavigation