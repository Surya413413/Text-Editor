import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  CustomHomeContainer,
  CustomSecondContainer,
  CustomImage,
  CustomHeading,
  CustomThirdContainer,
  CustomFourthContainer,
  Button1,
  Textarea,
  Button2,
  Button3,
  CustomUnorderList
} from './styledComponent'

class Home extends Component {
  state = {boldicon: false, italicStyle: false, underLine: false}

  onChnageboldicon = () => {
    this.setState(previous => ({boldicon: !previous.boldicon}))
  }

  onChnageItalic = () => {
    this.setState(previous => ({italicStyle: !previous.italicStyle}))
  }

  onChnageunderLine = () => {
    this.setState(previous => ({underLine: !previous.underLine}))
  }

  render() {
    const {boldicon, italicStyle, underLine} = this.state

    const color = boldicon === false ? '#f1f5f9' : ' #faff00'

    const italiccolor = italicStyle === false ? '#f1f5f9' : ' #faff00'

    const underlineColor = underLine === false ? '#f1f5f9' : ' #faff00'

    const fontWeight = boldicon === false ? 'normal' : 'bold'

    const fontStyle = italicStyle === false ? 'normal' : 'italic'

    const textDecoration = underLine === false ? 'normal' : 'underline'

    return (
      <CustomHomeContainer>
        <CustomSecondContainer>
          <CustomThirdContainer>
            <CustomHeading>Text Editor</CustomHeading>
            <CustomImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </CustomThirdContainer>
          <CustomFourthContainer>
            <CustomUnorderList>
              <li>
                <Button1
                  data-testid="bold"
                  onClick={this.onChnageboldicon}
                  color={color}
                >
                  <VscBold size={25} />
                </Button1>
              </li>
              <li>
                <Button2
                  data-testid="italic"
                  onClick={this.onChnageItalic}
                  color={italiccolor}
                >
                  <GoItalic size={25} />
                </Button2>
              </li>
              <li>
                <Button3
                  data-testid="underline"
                  onClick={this.onChnageunderLine}
                  color={underlineColor}
                >
                  <AiOutlineUnderline size={25} />
                </Button3>
              </li>
            </CustomUnorderList>
            <hr />
            <Textarea
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </CustomFourthContainer>
        </CustomSecondContainer>
      </CustomHomeContainer>
    )
  }
}
export default Home
