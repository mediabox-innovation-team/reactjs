import { useEffect } from "react"
import { useRef } from "react"

export default function WebRTC() {
          const localVideoref = useRef(null)
          const remoteVideoref = useRef(null)
          const inputRef = useRef(null)
          const pc_config = {
                    "iceServers": [
                              {
                                        urls: "stun:[STUN-IP"
                              }
                    ]
          }
          const pc = new RTCPeerConnection(null)

          pc.onicecandidate = (e) => {
                    const candidate = e.candidate
                    if(candidate) {
                              console.log(JSON.stringify(candidate))
                    }
          }

          pc.onconnectionstatechange = e => {
                    console.log(e)
          }
          pc.ontrack = (e) => {
                    console.log({ streams: e.streams })
                    remoteVideoref.current.srcObject  = e.streams[0]
          }

          const createOffer = async e => {
                    console.log("Offer")
                    const sdp = await pc.createOffer({
                               offerToReceiveVideo: 1
                    })
                    console.log(JSON.stringify(sdp))
                    await pc.setLocalDescription(sdp)
          }
          const createAnswer = async e => {
                    const sdp = await pc.createAnswer({ offerToReceiveVideo: 1 })
                    console.log(JSON.stringify(sdp))
                    await pc.setLocalDescription(sdp)
          }

          const setRemoteDescription = async e => {
                    const desc = JSON.parse(inputRef.current.value)
                    await pc.setRemoteDescription(new RTCSessionDescription(desc))
          }

          const addCandidate = async e => {
                    const candidate = JSON.parse(inputRef.current.value)
                    console.log("Adding candidate", candidate)
                    await pc.addIceCandidate(new RTCIceCandidate(candidate))
          }
          useEffect(() => {
                    (async () => {
                              try {
                                        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true })
                                        localVideoref.current.srcObject = mediaStream
                                        mediaStream.getTracks().forEach(track => {
                                                  pc.addTrack(track, mediaStream)
                                        })
                              } catch (error) {
                                        console.log(error)
                              }
                    })()
          }, [])
          return (
                    <>
                    <h1>WebRTC</h1>
                    <video src="" ref={localVideoref} autoPlay controls></video>
                    <video src="" ref={remoteVideoref} autoPlay controls></video>
                    <button onClick={createOffer}>Offer</button>
                    <button onClick={createAnswer}>Answer</button>
                    <br />
                    <textarea name="" id="" cols="30" rows="10" ref={inputRef}></textarea>
                    <button onClick={setRemoteDescription}>Set remote desc</button>
                    <button onClick={addCandidate}>Add candidate</button>
                    </>
          )
}