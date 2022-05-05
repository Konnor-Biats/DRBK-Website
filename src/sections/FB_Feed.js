import React from 'react'
import { Component } from 'react'
import { FacebookProvider } from 'react-facebook';
import { Page } from 'react-facebook';

export default class Example extends Component {
    render() {
      return (
        <FacebookProvider appId="123456789">
          <Page href="https://www.facebook.com/DonerRightBullyKennel/" tabs="timeline" />
        </FacebookProvider>    
      );
    }
  }